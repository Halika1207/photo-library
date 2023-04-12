import { Router } from '@angular/router';
import { FavoritesGalleryComponent } from './favorites-gallery.component';
import { FavoritePhotosService } from './services/favorite-cards.service';
import { MockService } from 'ng-mocks';
import { favoriteCollectionMock, photoBlobMockInCollection } from './mocks/favorite-collection.mock';

describe('FavoritesGalleryComponent', () => {
  let component: FavoritesGalleryComponent;
  let favoriteCardsService: FavoritePhotosService;
  let router: Router;
 //TODO: Finish configuring jest and proceed with tests. I use jest due small experience with karma and time limits
  beforeEach(() => {
    router = MockService<Router>(Router);
    favoriteCardsService = MockService<FavoritePhotosService>(FavoritePhotosService);
    component = new FavoritesGalleryComponent(favoriteCardsService, router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return favorite collection', () => {
    favoriteCardsService.favoriteCollection = favoriteCollectionMock;
    jest.spyOn(favoriteCardsService, 'getFavoritesCollection');
    component.ngOnInit();

    expect(favoriteCardsService.getFavoritesCollection).toHaveBeenCalled();
    expect(component.favoritePhotos.length).toEqual(favoriteCardsService.favoriteCollection.length);
  });

  it('should call navigate by url with proper id', () => {
    jest.spyOn(router, 'navigateByUrl');
    component.onRedirectToPhotoDetails(photoBlobMockInCollection);
    const { id } =photoBlobMockInCollection;

    expect(router.navigateByUrl).toHaveBeenCalledWith(id);
  });
});
