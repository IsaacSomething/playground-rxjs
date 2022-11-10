import { Component } from '@angular/core';
import { ApiService } from '@base/services/api';
import { Podcast, Podcasts } from '@base/services/data-access/model';
import { map } from 'rxjs';

@Component({
  selector: 'base-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent {
  podcastNews$ = this.apiService
    .getAll<Podcasts>('podcasts')
    .pipe(map(podcast => Object.values(podcast) as Podcast[]))
    .pipe(map(podcasts => podcasts.filter(podcast => podcast.genres.includes('PODCASTSERIES_NEWS'))));

  podcastOther$ = this.apiService
    .getAll<Podcasts>('podcasts')
    .pipe(map(podcast => Object.values(podcast) as Podcast[]))
    .pipe(map(podcasts => podcasts.filter(podcast => !podcast.genres.includes('PODCASTSERIES_NEWS'))));

  strip(value: string): string {
    return value.replace(/<.*?>/g, '');
  }

  constructor(private apiService: ApiService) {}
}
