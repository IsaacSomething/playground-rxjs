import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@base/services/api';

@Component({
  selector: 'base-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent {
  podcast$ = this.apiService.getPodcast(this.activatedRoute.snapshot.paramMap.get('uuid'));
  episode$ = this.apiService.getPodcastWithEpisode(this.activatedRoute.snapshot.paramMap.get('uuid'));

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {}
}
