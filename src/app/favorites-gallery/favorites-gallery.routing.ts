import { Routes, RouterModule } from '@angular/router';
import { FavoritesGalleryComponent } from './favorites-gallery.component';
import { IsPhotosInFavoritesGuard } from '../core/gurds/is-photos-in-favorite.guard';

const routes: Routes = [
  {
    path: '',
    component: FavoritesGalleryComponent,
   canActivate: [ IsPhotosInFavoritesGuard ],
  },
];


export const FavoritesGalleryRoutes = RouterModule.forChild(routes);
