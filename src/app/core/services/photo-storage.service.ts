import { Injectable } from '@angular/core';
import { PhotoBlob } from 'src/app/shared/models/photo-card.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoStorageService {
  photo: PhotoBlob;
  favoriteCollection: PhotoBlob[] = [];

  addToFavorite(photo: PhotoBlob): void {
    if(photo.isSelected) {
      this.favoriteCollection.push(photo);
    }
    this.updateCollectionInStorage();
  }

  removeSingleItemFromCollection(photo: PhotoBlob): void {
    const photoCard = this.findItem(photo);
    if(photoCard) {
      this.favoriteCollection = this.favoriteCollection.filter((el: PhotoBlob) => el.id !== photo.id);
    }
    this.updateCollectionInStorage();
  }

  getFavoritesCollection(key: string): PhotoBlob[] {
    const storagedData = this.getStorage(key);
    if(storagedData) {
      return this.favoriteCollection = JSON.parse(storagedData);
    }
    return this.favoriteCollection;
  }

  getPhotoFromCollection(id: string): PhotoBlob | undefined {
    this.getFavoritesCollection('favorite');
    const photo = this.favoriteCollection.find((el: PhotoBlob) => el.id === id);
    return photo;
  }

  private updateCollectionInStorage(): void {
    this.setToLocalStorage('favorite', this.favoriteCollection);
  }

  private findItem(photo: PhotoBlob): PhotoBlob | undefined {
    return this.favoriteCollection.find((el) => el.id === photo.id)
  }

  private setToLocalStorage(key: string, value: any): void {
    const valueToString = JSON.stringify(value);
    window.localStorage.setItem(key, valueToString);
  }

  private getStorage(key: string): string | null {
    const storagedData = window.localStorage.getItem(key);
    return storagedData;
  }
}
