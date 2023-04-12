import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PhotoBlob } from '../../models/photo-card.model';

@Component({
  selector: 'app-photo-cards-list',
  templateUrl: './photo-cards-list.component.html',
  styleUrls: ['./photo-cards-list.component.scss'],
})
export class PhotoCardsListComponent {
  //TODO: set ChengaDetection Strategy onPush. Use set or onchanges due changedetector issue
  @Input() photos: PhotoBlob[];
  @Input() buttonTitle: string;
  @Input() buttonTitleSelected: string;

  @Output() photoClick: EventEmitter<PhotoBlob> = new EventEmitter<PhotoBlob>();
  @Output() redirectToDetail: EventEmitter<PhotoBlob> = new EventEmitter<PhotoBlob>();


  onPhotosClick(photo: PhotoBlob): void {
    this.photoClick.emit(photo);
  }

  onRedirectToDetails(photo: PhotoBlob): void {
    this.redirectToDetail.emit(photo);
  }
}
