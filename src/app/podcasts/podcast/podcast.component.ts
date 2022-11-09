import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@base/services/api';
import { Podcast, Podcasts } from '@base/services/data-access/model';
import { map } from 'rxjs';

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
  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {}
}
