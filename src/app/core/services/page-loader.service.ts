import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageLoaderService {
  isLoading$ = new BehaviorSubject<boolean>(false);
  isLoading = false;

  toggleLoader(): void {
    this.isLoading$.next(this.isLoading = !this.isLoading)
  }
}
