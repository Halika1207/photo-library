import { Router } from '@angular/router';
import { FavoritesGalleryComponent } from './favorites-gallery.component';

import { MockService } from 'ng-mocks';
import { favoriteCollectionMock, photoBlobMockInCollection } from './mocks/favorite-collection.mock';
import { of } from 'rxjs';
import { PhotoStorageService } from '../core/services/photo-storage.service';

describe('FavoritesGalleryComponent', () => {
  let component: FavoritesGalleryComponent;
  let photoStorageService: PhotoStorageService;
  let router: Router;
 //TODO: Finish configuring jest and proceed with tests. I use jest due small experience with karma and time limits
  beforeEach(() => {
    router = MockService<Router>(Router);
    photoStorageService = MockService<PhotoStorageService >(PhotoStorageService );
    component = new FavoritesGalleryComponent(photoStorageService, router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return favorite collection', () => {
    photoStorageService.favoriteCollection = favoriteCollectionMock;
    jest.spyOn(photoStorageService, 'getFavoritesCollection');
    component.ngOnInit();

    expect(photoStorageService.getFavoritesCollection).toHaveBeenCalled();
    expect(component.favoritePhotos.length).toEqual(photoStorageService.favoriteCollection.length);
  });

  it('should call navigate by url with proper id', () => {
    jest.spyOn(router, 'navigateByUrl');
    component.onRedirectToPhotoDetails(photoBlobMockInCollection);
    const { id } =photoBlobMockInCollection;

    expect(router.navigateByUrl).toHaveBeenCalledWith(id);
  });

  it('should call redirect by url is collection is empty', (done) => {
    component.favoritePhotos = [];
    component.ngOnInit();

    of(component.favoritePhotos).subscribe(() => {
      expect(router.navigateByUrl).toHaveBeenCalledWith('/');
      done();
    })
  });
});
