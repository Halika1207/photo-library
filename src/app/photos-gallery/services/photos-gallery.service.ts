import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable, catchError } from "rxjs";
import { API_BASE_URL } from "src/app/core/api.config";
import { Photo } from "src/app/shared/models/photo-card.model";

@Injectable({
  providedIn: 'root'
})
export class PhotosGalleryService {
  private baseUrl: string = API_BASE_URL;

  constructor(
    private readonly http: HttpClient,
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
