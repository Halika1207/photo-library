import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoaderComponent, PhotoCardComponent, PhotoCardsListComponent } from './components';

const MAT_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [
    PhotoCardComponent,
    PhotoCardsListComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    ...MAT_MODULES,
  ],
  exports: [
    ...MAT_MODULES,
    PhotoCardComponent,
    PhotoCardsListComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
