import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize, tap } from 'rxjs/operators';
import { PageLoaderService } from '../services/page-loader.service';
import { ApiUrl } from '../api.config';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private pageLoaderService: PageLoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const min = Math.ceil(200);
    const max = Math.floor(300);
    const mathRandomDelay = Math.floor(Math.random() * (max - min + 1) + min)

    if(request.url.includes(ApiUrl.API_LIST_URL)) {
      return next.handle(request).pipe(
        tap(() => this.pageLoaderService.isLoading$.next(true)),
        delay(mathRandomDelay),
        finalize(() => {
          this.pageLoaderService.isLoading$.next(false)
        })
      );
    }

    return next.handle(request);
  }
}
