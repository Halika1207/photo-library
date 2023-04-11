import { Routes, RouterModule } from '@angular/router';
import { FavoritesGalleryComponent } from './favorites-gallery.component';

const routes: Routes = [
  { path: '', component: FavoritesGalleryComponent },
];


export const FavoritesGalleryRoutes = RouterModule.forChild(routes);
