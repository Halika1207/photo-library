import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesGalleryComponent } from './favorites-gallery.component';
import { FavoritesGalleryRoutes } from './favorites-gallery.routing';

@NgModule({
  declarations: [
    FavoritesGalleryComponent,
  ],
  imports: [
    CommonModule,
    FavoritesGalleryRoutes,
  ],
  exports: [
    FavoritesGalleryComponent,
  ]
})
export class FavoritesGalleryModule { }
