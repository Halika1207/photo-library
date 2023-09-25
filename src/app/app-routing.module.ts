import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './core/services/data-resolver.service';

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
        loadChildren: () => import('./photos-gallery/photos-gallery.module').then(m  => m.PhotosGalleryModule),
      },
      {
        path: RoutesPath.FAVORITES,
        loadChildren: () => import('./favorites-gallery/favorites-gallery.module').then(m => m.FavoritesGalleryModule),
        resolve: { data: DataResolverService },
      },
      {
        path: RoutesPath.PHOTOS,
        loadChildren: () => import('./photo-details/photo-details.module').then(m => m.PhotoDetailsModule),
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
