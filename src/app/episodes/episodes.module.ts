import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
const materialImports = [MatTableModule, MatPaginatorModule, MatCardModule, MatProgressBarModule];

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';

@NgModule({
  declarations: [EpisodesComponent],
  imports: [CommonModule, EpisodesRoutingModule, ...materialImports]
})
export class EpisodesModule {}
