import { Routes, RouterModule } from '@angular/router';
import { PhotosGalleryComponent } from './photos-gallery.component';

const routes: Routes = [
  { path: '', component: PhotosGalleryComponent },
];

export const PhotosGalleryRoutes = RouterModule.forChild(routes);
