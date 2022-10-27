import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiType } from '@base/services/data-access/model';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Get all values from type of data
   * @param type : ApiType
   * @returns Observable<T>
   */
  getAll<T>(type: ApiType): Observable<T> {
    return this.http.get<T>(`api/${type}`).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => this.error(error))
    );
  }

  private error(error: HttpErrorResponse) {
    console.error('Error:', error);
    const err = new Error(error.error);
    return throwError(() => err);
  }
}
