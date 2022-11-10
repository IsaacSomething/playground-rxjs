import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { DialogInsertComponent } from '../dialog-insert';
import { ApiService } from '@base/services/api';

@Component({
  selector: 'base-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [MatDialog]
})
export class ToolbarComponent {
  @Input() sidenav!: MatSidenav;
  @Input() small!: boolean | null;
  user$ = this.apiService.getSingleUser();

  constructor(private dialog: MatDialog, private apiService: ApiService) {}

  add() {
    this.dialog.open(DialogInsertComponent, { width: '500px', panelClass: 'with-loader' });
  }
}
