import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosGalleryComponent } from './photos-gallery.component';
import { PhotosGalleryRoutes } from './photos-gallery.routing';


@NgModule({
  declarations: [
    PhotosGalleryComponent,
   ],
  imports: [
    CommonModule,
    PhotosGalleryRoutes,
    SharedModule,
  ],
  exports: [
    PhotosGalleryComponent,
  ]
})
export class PhotosGalleryModule {}
