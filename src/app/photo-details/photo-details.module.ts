import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';
import { SharedModule } from '../shared/shared.module';
import { PhotoDetailsRoutes } from './photo-details.routing';

@NgModule({
  declarations: [
    PhotoDetailsComponent
  ],
  imports: [
    CommonModule,
    PhotoDetailsRoutes,
    SharedModule,
  ],
  exports: [
    PhotoDetailsComponent,
  ]
})
export class PhotoDetailsModule {}
