import { Component, OnInit } from '@angular/core';
import { PAGE_CONFIG } from '../core/config/page.config';
import { FAVORITES_GALLERY_PAGE_CONFIG } from './config/favorites-gallery.page.config';
import { PhotoBlob } from '../shared/models/photo-card.model';
import { Router } from '@angular/router';
import { FavoritePhotosService } from './services/favorite-cards.service';


@Component({
  selector: 'app-favorites-gallery',
  templateUrl: './favorites-gallery.component.html',
  styleUrls: ['./favorites-gallery.component.scss'],
  providers: [{ provide: PAGE_CONFIG, useValue: FAVORITES_GALLERY_PAGE_CONFIG }]
})
export class FavoritesGalleryComponent implements OnInit {
  favoritePhotos: PhotoBlob[];

  constructor(
    private readonly favoriteCardsService: FavoritePhotosService,
    private readonly router: Router,
    ) {}

  ngOnInit(): void {
    this.favoritePhotos = this.favoriteCardsService.getFavoritesCollection('favorite');
  }

  onRedirectToPhotoDetails(photo: PhotoBlob): void {
    const { id } = photo;
    const url = `/photos/${ id }`;
    this.router.navigateByUrl(url);
  }
}
