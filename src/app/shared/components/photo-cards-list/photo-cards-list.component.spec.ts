import { PhotoCardsListComponent } from "./photo-cards-list.component";
import { photoBlobMock } from './../../../favorites-gallery/mocks/favorite-collection.mock';

describe('PhotoCardsListComponent', () => {
  let component: PhotoCardsListComponent;

  beforeEach(async () => {
    component = new PhotoCardsListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoul emit photoClick', () => {
    jest.spyOn(component.photoClick, 'emit');
    component.onPhotosClick(photoBlobMock);

    expect(component.photoClick.emit).toHaveBeenCalled();
  });

  it('should call redirectToDetails emit', () => {
    jest.spyOn(component.redirectToDetail, 'emit');
    component.onRedirectToDetails(photoBlobMock);

    expect(component.redirectToDetail.emit).toHaveBeenCalled();
  });
});

