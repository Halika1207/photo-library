import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageLoaderService {
  isLoading$ = new Subject<boolean>();
  isLoading = false;

  toggleLoader(): void {
    this.isLoading$.next(this.isLoading = !this.isLoading)
  }
}
