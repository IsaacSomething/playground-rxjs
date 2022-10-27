import { Component } from '@angular/core';
import { ApiService } from '@base/api/api.service';
import { Episodes } from 'data-access/model';

@Component({
  selector: 'base-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {
  episodes$ = this.apiService.getAll<Episodes>('episodes');

  constructor(private apiService: ApiService) {}
}
