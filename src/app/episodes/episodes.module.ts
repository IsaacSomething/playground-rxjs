import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
const materialImports = [MatTableModule, MatPaginatorModule, MatCardModule];

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';

@NgModule({
  declarations: [EpisodesComponent],
  imports: [CommonModule, EpisodesRoutingModule, ...materialImports]
})
export class EpisodesModule {}
