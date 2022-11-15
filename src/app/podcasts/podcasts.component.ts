import { Component } from '@angular/core';
import { LoaderService } from '@base/components/loader/loader.service';
import { MessagesService } from '@base/components/messages/messages.service';
import { ApiService } from '@base/services/api';
import { Podcast, Podcasts } from '@base/services/data-access/model';
import { catchError, map, Observable, throwError } from 'rxjs';

@Component({
  selector: 'base-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent {
  podcastNews$!: Observable<Podcasts>;
  podcastOther$!: Observable<Podcasts>;

  constructor(private apiService: ApiService, private loaderService: LoaderService, private messagesService: MessagesService) {
    this.watchRetry();
    this.getPodcasts();
  }

  strip(value: string): string {
    return value.replace(/<.*?>/g, '');
  }

  error() {
    this.getPodcasts(true);
  }

  private watchRetry() {
    this.apiService.retry$.subscribe(() => this.getPodcasts());
  }

  private getPodcasts(error?: boolean) {
    const allPodcasts$ = this.apiService.getAll<Podcasts>(error ? 'error' : 'podcasts').pipe(
      map(podcasts => Object.values(podcasts) as Podcast[]),
      catchError(err => {
        const message = 'ERROR ::: [Could not load podcasts]';
        this.messagesService.showErrors(err, message);
        return throwError(() => err);
      })
    );

    const podcasts$ = this.loaderService.showLoaderUntilComplete(allPodcasts$);
    this.podcastNews$ = podcasts$.pipe(map(podcasts => podcasts.filter(podcast => podcast.genres.includes('PODCASTSERIES_NEWS'))));
    this.podcastOther$ = podcasts$.pipe(map(podcasts => podcasts.filter(podcast => !podcast.genres.includes('PODCASTSERIES_NEWS'))));
  }
}
