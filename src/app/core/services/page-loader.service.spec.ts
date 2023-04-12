import { PageLoaderService } from './page-loader.service';

describe('Service: PageLoader', () => {
  let pageLoaderService: PageLoaderService;

  beforeEach(() => {
    pageLoaderService = new PageLoaderService();
  });

  it('should change loading state', () => {
    pageLoaderService.isLoading = true;
    pageLoaderService.toggleLoader();

    expect(pageLoaderService.isLoading).toBeFalsy();
  });
});
