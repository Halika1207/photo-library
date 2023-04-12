import { favoriteCollectionMock, photoBlobMockInCollection, photoBlobMockOutOfCollection } from "../../favorites-gallery/mocks/favorite-collection.mock";
import { PhotoStorageService } from "./photo-storage.service";

describe('FavoritePhotosService', () => {
  let service: PhotoStorageService;
   ///TODO: Finish configuring jest and proceed with tests. I use jest due small experience with karma and time limits

  beforeEach(() => {
    service = new PhotoStorageService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item to favorite collection', () => {
    service.favoriteCollection = favoriteCollectionMock;
    const lengthOfInitCollection = service.favoriteCollection.length;
    service.addToFavorite(photoBlobMockOutOfCollection);
    const expectedCollectionLength = lengthOfInitCollection + 1;

    expect(service.favoriteCollection.length).toEqual(expectedCollectionLength);
  });

  it('should remove item from favorite collection', () => {
    service.favoriteCollection = favoriteCollectionMock;
    const lengthOfInitCollection = service.favoriteCollection.length;
    service.removeSingleItemFromCollection(photoBlobMockInCollection);
    const expectedCollectionLength = lengthOfInitCollection - 1;

    expect(service.favoriteCollection.length).toEqual(expectedCollectionLength);
  });
});
