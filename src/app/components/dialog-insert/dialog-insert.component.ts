import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LoaderComponent } from '../loader';

@Component({
  selector: 'base-dialog-insert',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, LoaderComponent],
  templateUrl: './dialog-insert.component.html',
  styleUrls: ['./dialog-insert.component.scss']
})
export class DialogInsertComponent {
  categories = ['NEWS', 'TECHNOLOGY', 'SOCIETY', 'BUSINESS', 'LEISURE', 'EDUCATION', 'COMEDY'];

  constructor() {}
}
