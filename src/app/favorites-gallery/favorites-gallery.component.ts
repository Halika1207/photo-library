import { Component, OnDestroy, OnInit } from '@angular/core';
import { PAGE_CONFIG } from '../core/config/page.config';
import { FAVORITES_GALLERY_PAGE_CONFIG } from './config/favorites-gallery.page.config';
import { PhotoBlob } from '../shared/models/photo-card.model';
import { Router } from '@angular/router';
import { PhotoStorageService } from '../core/services/photo-storage.service';
import { Subject, map, of, takeUntil } from 'rxjs';



@Component({
  selector: 'app-favorites-gallery',
  templateUrl: './favorites-gallery.component.html',
  styleUrls: ['./favorites-gallery.component.scss'],
  providers: [{ provide: PAGE_CONFIG, useValue: FAVORITES_GALLERY_PAGE_CONFIG }]
})
export class FavoritesGalleryComponent implements OnInit, OnDestroy {
  favoritePhotos: PhotoBlob[];
  unsibscribe$ = new Subject<void>();

  constructor(
    private readonly favoriteCardsService: PhotoStorageService,
    private readonly router: Router,
    ) {}

  ngOnInit(): void {
    this.favoritePhotos = this.favoriteCardsService.getFavoritesCollection('favorite');

    of(this.favoritePhotos).pipe(
      takeUntil(this.unsibscribe$),
      map((photos: PhotoBlob[]) => !!(photos && photos.length) || this.router.navigateByUrl('/')),
    ).subscribe();
  }

  onRedirectToPhotoDetails(photo: PhotoBlob): void {
    const { id } = photo;
    const url = `/photos/${ id }`;
    this.router.navigateByUrl(url);
  }

  ngOnDestroy(): void {
    this.unsibscribe$.next();
    this.unsibscribe$.complete();
  }
}
