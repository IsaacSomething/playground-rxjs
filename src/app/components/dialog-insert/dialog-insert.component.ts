import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoaderComponent } from '../loader';
import { LoaderService } from '../loader/loader.service';
import { PodcastForm } from '@base/services/data-access/model';
import { DataModel } from '@base/services/data-access/model/data.class';

const imports = [
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  LoaderComponent,
  ReactiveFormsModule,
  FormsModule,
  MatSlideToggleModule
];

@Component({
  selector: 'base-dialog-insert',
  standalone: true,
  imports: [CommonModule, ...imports],
  templateUrl: './dialog-insert.component.html',
  styleUrls: ['./dialog-insert.component.scss']
})
export class DialogInsertComponent {
  categories = ['NEWS', 'TECHNOLOGY', 'SOCIETY', 'BUSINESS', 'LEISURE', 'EDUCATION', 'COMEDY'];
  podcastForm: FormGroup<PodcastForm> = new DataModel(this.formBuilder).podcastForm;

  constructor(private loaderService: LoaderService, private formBuilder: FormBuilder) {}

  insert() {}
}
