import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";

import { FavoritePhotosService } from './../../favorites-gallery/services/favorite-cards.service';
import { Observable, map, of } from "rxjs";
import { PhotoBlob } from "src/app/shared/models/photo-card.model";

@Injectable({
  providedIn: 'root',
})
export class IsPhotosInFavoritesGuard implements CanActivate {
  constructor(
    private readonly favoriteService: FavoritePhotosService,
    private readonly router: Router,
  ) {}

  canActivate(): Observable<boolean | UrlTree>{
    return of(this.favoriteService.getFavoritesCollection('favorites'))
      .pipe( map((photos: PhotoBlob[]) => !!(photos && photos.length) || this.router.parseUrl('/')));
  }
}
