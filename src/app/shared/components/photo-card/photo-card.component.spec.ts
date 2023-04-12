import { PageConfig } from 'src/app/core/config/page.config';
import { PhotoCardComponent } from './photo-card.component';

describe('PhotoCardComponent', () => {
  let component: PhotoCardComponent;
  let pageConfig: PageConfig;


  beforeEach(async () => {
    pageConfig = {
      isRedirectedToPhotoDetails: false,
      isShownActionsBlocks: true,
      isShownDescriptionBlock: false,
    };
    component = new PhotoCardComponent(pageConfig)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoul emit photoClick value and change is selected state', () => {
    component.isSelected = false;
    jest.spyOn(component.photoClick, 'emit');
    component.onClick();

    expect(component.photoClick.emit).toHaveBeenCalled();
    expect(component.isSelected).toBeTruthy();
  });

  it('should call redirectToDetails emit', () => {
    pageConfig.isRedirectedToPhotoDetails = true;
    jest.spyOn(component.redirectToDetails, 'emit');
    component.onClick();

    expect(component.redirectToDetails.emit).toHaveBeenCalled();
  });
});
