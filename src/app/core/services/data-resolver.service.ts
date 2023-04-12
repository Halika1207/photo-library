import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PhotoBlob } from 'src/app/shared/models/photo-card.model';
import { PhotoStorageService } from './photo-storage.service';
import { COLLECTION_KEY } from '../config/data.config';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<PhotoBlob[]> {

constructor(private readonly photoStorageService: PhotoStorageService) { }

  resolve(): PhotoBlob[] {
    return this.photoStorageService.getFavoritesCollection(COLLECTION_KEY);
  }
}
