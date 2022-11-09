import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@base/services/api';
import { Episodes, Podcast, Podcasts } from '@base/services/data-access/model';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'base-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent {
  podcast$ = this.apiService
    .getAll<Podcasts>('podcasts')
    .pipe(
      map(podcast =>
        (Object.values(podcast) as Podcast[]).find(podcast => podcast.uuid === this.activatedRoute.snapshot.paramMap.get('uuid'))
      )
    );
  episode: any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
    combineLatest(
      this.apiService
        .getAll<Podcasts>('podcasts')
        .pipe(
          map(podcast =>
            (Object.values(podcast) as Podcast[]).find(podcast => podcast.uuid === this.activatedRoute.snapshot.paramMap.get('uuid'))
          )
        ),
      this.apiService.getAll<Podcasts>('episodes')
    ).subscribe(([podcast, episodes]) => {
      this.episode = Object.values(episodes).find(episode => episode.podcastId === podcast?.id);
      console.log("this.episode", this.episode)
    });
  }
}
