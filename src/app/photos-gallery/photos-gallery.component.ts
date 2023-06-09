import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PAGE_CONFIG } from '../core/config/page.config';
import { PHOTOS_GALLERY_PAGE_CONFIG } from './config/photos-gallery.page.config';
import { LoadDataQuantityDetector, ScreenSizeDetector } from '../shared/models/screen-size.model';
import { BehaviorSubject, Observable, Subject, catchError, forkJoin, map, switchMap, takeUntil, throwError } from 'rxjs';
import {  Photo, PhotoBlob } from '../shared/models/photo-card.model';
import { PhotosGalleryService } from './services/photos-gallery.service';
import { PhotoStorageService } from '../core/services/photo-storage.service';


@Component({
  selector: 'app-photos-gallery',
  templateUrl: './photos-gallery.component.html',
  styleUrls: ['./photos-gallery.component.scss'],
  providers: [{ provide: PAGE_CONFIG, useValue: PHOTOS_GALLERY_PAGE_CONFIG }],
})
export class PhotosGalleryComponent implements OnInit, OnDestroy {
  screenSize: ScreenSizeDetector;
  innerPhotosQuantity = 0;
  pagePagination = 1;
  photoQueryParams: LoadDataQuantityDetector;
  photos$$: BehaviorSubject<PhotoBlob[]> = new BehaviorSubject<PhotoBlob[]>([]);
  photos$ = this.photos$$.asObservable();

  private screenSize$: Subject<number> = new Subject();
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private readonly photoCardsService: PhotosGalleryService,
    private readonly photoStorageService: PhotoStorageService,
  ) {
    this.screenSize = new ScreenSizeDetector(window.innerWidth);
    this.photoQueryParams = new LoadDataQuantityDetector(this.screenSize, window.innerHeight);
    this.innerPhotosQuantity = this.photoQueryParams?.quantityBigDevice || this.photoQueryParams?.quantitySmallDevice;
  }

  @ViewChild('container') galleryContainer: ElementRef;

  @HostListener('window:resize', ['$event'])
  onScreenResize(): void {
    this.screenSize$.next(window.innerWidth);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const containerCoordinate = this.galleryContainer.nativeElement.getBoundingClientRect();

    if( containerCoordinate.bottom - 10 <= window.innerHeight) {
      this.pagePagination +=1;
      this.loadPhotos(this.pagePagination, this.innerPhotosQuantity);
    }
}

  ngOnInit(): void {
    this.loadPhotos(this.pagePagination, this.innerPhotosQuantity);

    this.screenSize$.pipe(
      takeUntil(this.unsubscribe$),
      map((screenWidth: number) => new ScreenSizeDetector(screenWidth)),
    ).subscribe((screenDetector: ScreenSizeDetector) => {
      this.screenSize = screenDetector;
      this.photoQueryParams = new LoadDataQuantityDetector(this.screenSize, window.innerHeight);
      this.innerPhotosQuantity = this.photoQueryParams?.quantityBigDevice || this.photoQueryParams?.quantitySmallDevice;
    });
  }

  onAddToCollection(photo: PhotoBlob): void {
    if(photo.isSelected){
      this.photoStorageService.addToFavorite(photo);
    } else {
      this.photoStorageService.removeSingleItemFromCollection(photo);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private loadPhotos(page: number, limit: number): void {
    this.photoCardsService.getPhotoCards(page, limit).pipe(
      takeUntil(this.unsubscribe$),
      switchMap((photos: Photo[]) => forkJoin(this.loadPhotoAndEncode(photos))),
      switchMap((photosBlob: PhotoBlob[]) => forkJoin(photosBlob.map((photo: PhotoBlob) => this.convertToBase64(photo)))),
      catchError((err: Error) => throwError(err)),
    ).subscribe((photos: PhotoBlob[]) =>  {
      this.photos$$.next([
        ...this.photos$$.getValue(),
        ...photos
      ]);
    });
  }

  private loadPhotoAndEncode(photos: Photo[]): Observable<{ photoUrl: Blob; id: string; isSelected: boolean }>[] {
    const getImageReuest = photos.map((photo: Photo) => this.photoCardsService.getPhotoCard(photo.id).pipe(
      map((value: Blob) =>  ({
        photoUrl: value,
        id: photo.id,
        isSelected: false,
        author: photo.author,
        url: photo.url,
      }))
    ));

      return getImageReuest;
  }

  private convertToBase64(blob: PhotoBlob): Observable<PhotoBlob> {
    const reader = new FileReader();
    return new Observable((sub) => {
      reader.readAsDataURL(blob.photoUrl);
      reader.onload;
      reader.onloadend = () => {
        sub.next({ ...blob, encodedUrl: reader.result });
        sub.complete();
      };

      reader.onerror = (err) => sub.error(err);
    })
  }
}
