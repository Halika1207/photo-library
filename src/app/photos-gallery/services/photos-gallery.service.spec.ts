import { photoBlobMockInCollection } from './../../favorites-gallery/mocks/favorite-collection.mock';
import { HttpClient, HttpParams } from "@angular/common/http";
import { PhotosGalleryService } from "./photos-gallery.service";
import { of } from 'rxjs';

describe('PhotosGalleryService', () => {
  let service: PhotosGalleryService;
  let httpClient: Partial<HttpClient>
  //TODO: Finish configuring jest and proceed with tests. I use jest due small experience with karma and time limits

  beforeEach(() => {
    httpClient = {
      get: jest.fn(),
    };
    service = new PhotosGalleryService(httpClient as HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make get request for photo collection with proper url and params', (done) => {
    httpClient.get = jest.fn().mockReturnValue(of(photoBlobMockInCollection));
    const page = 1;
    const limit = 4;
    const url = "https://picsum.photos/v2/list"
    const params = new HttpParams({
      fromObject: {
        page,
        limit,
      },
    });

    jest.spyOn(httpClient, 'get');
    service.getPhotoCards(page, limit).subscribe(() => {
      expect(httpClient.get).toHaveBeenCalledWith(
        url,
        { params },
      )
      done();
    })
  });
});
