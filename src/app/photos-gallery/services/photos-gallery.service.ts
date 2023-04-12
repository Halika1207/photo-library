import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable, catchError } from "rxjs";
import {  ApiUrl } from "src/app/core/api.config";
import { Photo } from "src/app/shared/models/photo-card.model";

@Injectable({
  providedIn: 'root'
})
export class PhotosGalleryService {
  private baseUrl = ApiUrl;

  constructor(
    private readonly http: HttpClient,
  ) {}

  getPhotoCards(page: number, limit: number): Observable<Photo[]> {
    const url = this.baseUrl.API_LIST_URL;
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

  getPhotoCard(id: string): Observable<Blob> {
    const url = `${ this.baseUrl.API_BASE_URL}/id/${id}/600/400`
    return this.http.get(url, { responseType: 'blob' }).pipe(
      catchError((err: Error) => {
        console.error(err);
        return EMPTY;
      }),
    );
  }
}
