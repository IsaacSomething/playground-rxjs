import { Component } from '@angular/core';
import { ApiService } from '@base/services/api';
import { Podcasts } from '@base/services/data-access/model';

@Component({
  selector: 'base-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent {
  podcasts$ = this.apiService.getAll<Podcasts>('podcasts');

  constructor(private apiService: ApiService) {}
}
