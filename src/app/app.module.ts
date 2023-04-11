import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosGalleryModule } from './photos-gallery/photos-gallery.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';
import { FavoritesGalleryModule } from './favorites-gallery/favorites-gallery.module';
import { CoreModule } from './core/core.module';
import { HeaderModule } from './header/header.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    PhotosGalleryModule,
    PhotoDetailsModule,
    FavoritesGalleryModule,
    CoreModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
