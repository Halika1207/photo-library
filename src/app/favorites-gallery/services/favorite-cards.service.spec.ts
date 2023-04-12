import { favoriteCollectionMock, photoBlobMockInCollection, photoBlobMockOutOfCollection } from "../mocks/favorite-collection.mock";
import { FavoritePhotosService } from "./favorite-cards.service";

describe('FavoritePhotosService', () => {
  let service: FavoritePhotosService;
  ///TODO: Finish configuring jest and proceed with tests

  beforeEach(() => {
    service = new FavoritePhotosService();
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
