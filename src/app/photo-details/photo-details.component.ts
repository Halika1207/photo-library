import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PhotoBlob } from '../shared/models/photo-card.model';
import { FavoritePhotosService } from '../favorites-gallery/services/favorite-cards.service';
import { PAGE_CONFIG } from '../core/config/page.config';
import { PHOTO_DETAILS_PAGE_CONFIG } from './config/photo-details.page.config';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
  providers: [{ provide: PAGE_CONFIG, useValue: PHOTO_DETAILS_PAGE_CONFIG }]
})
export class PhotoDetailsComponent implements OnInit {
  initialPhotoId: Params;
  photo: PhotoBlob;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly favoriteCardsService: FavoritePhotosService,
    private readonly router: Router,
  ){}


  ngOnInit(): void {
    this.initialPhotoId = this.activatedRoute?.snapshot?.params;
    const { id } =this.initialPhotoId;
    const photo = this.favoriteCardsService.getPhotoFromCollection(id);

    if(photo) {
      this.photo = photo;
    }
  }

  onRemoveFromCollection(photo: PhotoBlob): void {
    this.favoriteCardsService.removeSingleItemFromCollection(photo);
    const url = '/favorites'
    this.router.navigateByUrl(url)
  }
}
