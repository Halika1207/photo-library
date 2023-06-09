import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Image64, PhotoBlob } from '../../models/photo-card.model';
import { PAGE_CONFIG, PageConfig } from 'src/app/core/config/page.config';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoCardComponent  {
  isSelected = false;

  @Input() photo: PhotoBlob;
  @Input() image: Image64;

  get encodedImage(): Image64 {
    return this.image || this.photo.encodedUrl;
  }

  @Input() buttonTitle: string;
  @Input() buttonTitleSelected: string;
  @Input() showSourse = false;

  @Output() photoClick: EventEmitter<PhotoBlob> = new EventEmitter<PhotoBlob>();
  @Output() redirectToDetails: EventEmitter<PhotoBlob> = new EventEmitter<PhotoBlob>();
  @Output() buttonClick: EventEmitter<PhotoBlob> = new EventEmitter<PhotoBlob>();

  constructor(@Inject(PAGE_CONFIG) public pageConfig: PageConfig) {}

  onClick(): void {
    if(this.pageConfig.isRedirectedToPhotoDetails) {
      this.redirectToDetails.emit(this.photo);
    }

    this.togglePhotoSelection();
  }

  private togglePhotoSelection(): void {
    this.isSelected = !this.isSelected;
    this.photo.isSelected = this.isSelected;
    this.photoClick.emit(this.photo);
  }
}
