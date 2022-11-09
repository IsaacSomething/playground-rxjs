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
  podcasts$ = this.apiService.getAll<Podcasts>('podcasts').pipe(map(podcast => Object.values(podcast) as Podcast[]));

  strip(value: string):string {
    return value.replace(/<.*?>/g, '');
  }

  constructor(private apiService: ApiService) {}
}
