import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@base/services/api';
import { episodes } from '@base/services/data-access/data';
import { Episode, Episodes } from '@base/services/data-access/model';
import { map } from 'rxjs';

@Component({
  selector: 'base-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  episodes$ = this.apiService.getAll<Episodes>('episodes').pipe(map(episode => Object.values(episode) as Episode[]));
  dataSource: any;

  constructor(private apiService: ApiService) {}

  ngAfterViewInit() {
    this.episodes$.pipe(map(episode => Object.values(episode) as Episode[])).subscribe(episodes => {
      this.dataSource = new MatTableDataSource(episodes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
