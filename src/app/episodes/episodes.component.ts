import { Component } from '@angular/core';
import { ApiService } from '@base/services/api';
import { Episodes } from '@base/services/data-access/model';

@Component({
  selector: 'base-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {
  episodes$ = this.apiService.getAll<Episodes>('episodes');

  constructor(private apiService: ApiService) {}
}
