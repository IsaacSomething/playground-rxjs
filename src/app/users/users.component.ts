import { Component } from '@angular/core';
import { ApiService } from '@base/services/api';
import { User, Users } from '@base/services/data-access/model';
import { map } from 'rxjs';

@Component({
  selector: 'base-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users$ = this.apiService.getAll<Users>('users').pipe(map(user => Object.values(user) as User[]));

  constructor(private apiService: ApiService) {}
}
