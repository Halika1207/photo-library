import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCardsListComponent } from './photo-cards-list.component';

describe('PhotoCardsListComponent', () => {
  let component: PhotoCardsListComponent;
  let fixture: ComponentFixture<PhotoCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCardsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
