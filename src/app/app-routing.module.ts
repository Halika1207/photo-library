import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum RoutesPath {
  PHOTOS = 'photos/:id',
  FAVORITES = 'favorites',
}

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./photos-gallery/photos-gallery.module').then((m: any) => m.PhotosGalleryModule),
      },
      {
        path: RoutesPath.FAVORITES,
        loadChildren: () => import('./favorites-gallery/favorites-gallery.module').then((m: any) => m.FavoritesGalleryModule),
      },
      {
        path: RoutesPath.PHOTOS,
        loadChildren: () => import('./photo-details/photo-details.module').then((m: any) => m.PhotoDetailsModule),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
