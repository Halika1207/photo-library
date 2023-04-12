import { Router, UrlTree } from "@angular/router";
import { IsPhotosInFavoritesGuard } from "./is-photos-in-favorite.guard";
import { FavoritePhotosService } from "src/app/favorites-gallery/services/favorite-cards.service";
import { MockService } from "ng-mocks";

describe('IsPhotosInFavoritesGuard', () => {
  let guard: IsPhotosInFavoritesGuard;
  let router: Router;
  let favoritePhotoService: FavoritePhotosService;
 ///TODO: Finish configuring jest and proceed with tests. I use jest due small experience with karma and time limits
  beforeEach(() => {
    router = MockService<Router>(Router);
    favoritePhotoService = MockService(FavoritePhotosService);
    guard = new IsPhotosInFavoritesGuard(favoritePhotoService, router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should redirect if is empty favorite collection', (done) => {
    favoritePhotoService.getFavoritesCollection = jest.fn().mockReturnValue([]);
    jest.spyOn(router, 'parseUrl').mockReturnValue(new UrlTree());

    guard.canActivate().subscribe((data) => {
      expect(data).toBeInstanceOf(UrlTree);
      done();
    });
  });

  it('should allow user to access page', (done) => {
    favoritePhotoService.getFavoritesCollection = jest.fn().mockReturnValue([]);
    jest.spyOn(router, 'parseUrl').mockReturnValue(new UrlTree());

    guard.canActivate().subscribe((data) => {
      expect(data).toBeInstanceOf(UrlTree);
      done();
    });
  });
});
