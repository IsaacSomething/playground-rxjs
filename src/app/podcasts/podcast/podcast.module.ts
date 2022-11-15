import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryModule } from '@base/pipes/category';
import { LoaderComponent } from '@base/components/loader';
const moduleImports = [CategoryModule, LoaderComponent];

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const materialImports = [
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
];

import { PodcastRoutingModule } from './podcast-routing.module';
import { PodcastComponent } from './podcast.component';

@NgModule({
  declarations: [PodcastComponent],
  imports: [CommonModule, PodcastRoutingModule, ...moduleImports, ...materialImports]
})
export class PodcastModule {}
