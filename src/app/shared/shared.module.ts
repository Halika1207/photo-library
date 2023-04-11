import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent, PhotoCardComponent, PhotoCardsListComponent } from './components';

@NgModule({
  declarations: [
    PhotoCardComponent,
    PhotoCardsListComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhotoCardComponent,
    PhotoCardsListComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
