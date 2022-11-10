import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@base/components/loader/loader.service';
import { ApiService } from '@base/services/api';
import { Podcast, Podcasts } from '@base/services/data-access/model';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'base-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent {
  podcastNews$: Observable<Podcasts>;
  podcastOther$: Observable<Podcasts>;

  strip(value: string): string {
    return value.replace(/<.*?>/g, '');
  }

  constructor(private apiService: ApiService, private loaderService: LoaderService) {
    const allPodcasts$ = this.apiService.getAll<Podcasts>('podcasts').pipe(map(podcasts => Object.values(podcasts) as Podcast[]));
    const podcasts$ = this.loaderService.showLoaderUntilComplete(allPodcasts$);
    this.podcastNews$ = podcasts$.pipe(map(podcasts => podcasts.filter(podcast => !podcast.genres.includes('PODCASTSERIES_NEWS'))));
    this.podcastOther$ = podcasts$.pipe(map(podcasts => podcasts.filter(podcast => !podcast.genres.includes('PODCASTSERIES_NEWS'))));
  }
}
