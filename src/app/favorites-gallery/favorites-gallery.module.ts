import { SharedModule } from './../shared/shared.module';
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
    SharedModule,
  ],
  exports: [
    FavoritesGalleryComponent,
  ]
})
export class FavoritesGalleryModule {}
