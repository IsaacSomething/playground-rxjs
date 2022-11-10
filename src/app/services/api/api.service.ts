import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiType, Episode, Podcast, Podcasts, User, Users } from '@base/services/data-access/model';
import { catchError, combineLatest, first, map, Observable, retry, shareReplay, throwError } from 'rxjs';

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
      shareReplay(),
      retry(2),
      catchError((error: HttpErrorResponse) => this.error(error))
    );
  }

  /**
   * Get a single podcast
   * @param uuid : string
   * @returns Observable<Podcast>
   */
  getPodcast(uuid: string | null): Observable<Podcast | undefined> {
    return this.http.get<Podcasts>('api/podcasts').pipe(
      map(podcast => (Object.values(podcast) as Podcast[]).find(podcast => podcast.uuid === uuid)),
      shareReplay(),
      retry(2),
      catchError((error: HttpErrorResponse) => this.error(error))
    );
  }

  /**
   * Get an episode from a podcast
   * @param uuid :string
   * @returns Observable<Episode | undefined>
   */
  getPodcastWithEpisode(uuid: string | null): Observable<Episode | undefined> {
    return combineLatest([this.getPodcast(uuid), this.getAll<Podcasts>('episodes')]).pipe(
      map(([podcast, episodes]) => Object.values(episodes).find(episode => episode.podcastId === podcast?.id)),
      catchError((error: HttpErrorResponse) => this.error(error))
    );
  }

  /**
   * Get the first user
   * @returns Observable<User | undefined>
   */
  getSingleUser(): Observable<User | undefined> {
    return this.http.get<Users>('api/users').pipe(
      map(podcast => (Object.values(podcast) as User[])[0] as User),
      shareReplay(),
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
