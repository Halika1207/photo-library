import { Routes, RouterModule } from '@angular/router';
import { PhotoDetailsComponent } from './photo-details.component';

const routes: Routes = [
  { path: '', component: PhotoDetailsComponent },
];

export const PhotoDetailsRoutes = RouterModule.forChild(routes);
