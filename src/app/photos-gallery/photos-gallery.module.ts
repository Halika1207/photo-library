import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosGalleryComponent } from './photos-gallery.component';
import { PhotosGalleryRoutes } from './photos-gallery.routing';


@NgModule({
  declarations: [
    PhotosGalleryComponent
  ],
  imports: [
    CommonModule,
    PhotosGalleryRoutes,
  ],
  exports: [
    PhotosGalleryComponent,
  ]
})
export class PhotosGalleryModule { }
