import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, empty, EMPTY, finalize, interval, mergeMap, Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading$ = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.isLoading$.asObservable();

  showLoaderUntilComplete<T>(observable$: Observable<T>): Observable<T> {
    this.show();
    observable$.subscribe({ complete: () => this.hide() });

    return of(null).pipe(
      tap(() => this.show()),
      concatMap(() => observable$),
      finalize(() => this.hide())
    );
  }

  show() {
    this.isLoading$.next(true);
  }

  hide() {
    this.isLoading$.next(false);
  }
}
