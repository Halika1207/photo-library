import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable, catchError } from "rxjs";
import { API_BASE_URL } from "src/app/core/api.config";
import { PageLoaderService } from "src/app/core/services/page-loader.service";
import { Photo } from "src/app/shared/models/photo-card.model";

@Injectable({
  providedIn: 'root'
})
export class PhotosGalleryService {
  private baseUrl: string = API_BASE_URL;

  constructor(
    private readonly http: HttpClient,
    private readonly pageLoader: PageLoaderService,
  ) {}

  getPhotoCards(page: number, limit: number): Observable<Photo[]> {
    const url = `${ this.baseUrl }/v2/list`
    const params = new HttpParams({
      fromObject: {
        page,
        limit,
      },
    });

    return this.http.get<Photo[]>(url, { params }).pipe(
      // tap(() => this.pageLoader.toggleLoader()),
      // delay(500),
      // tap(() => this.pageLoader.toggleLoader()),
      catchError((err: Error) => {
        console.error(err);
        return EMPTY;
      }),
    );
  }

  getPhotoCard(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      catchError((err: Error) => {
        console.error(err);
        return EMPTY;
      }),
    );
  }
}
