import { Component } from '@angular/core';
import { ApiService } from '@base/api/api.service';
import { Users } from 'data-access/model';

@Component({
  selector: 'base-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users$ = this.apiService.getAll<Users>('podcasts');

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {}
}
