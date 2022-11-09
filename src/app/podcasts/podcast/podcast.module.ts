import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
const materialImports = [MatCardModule, MatGridListModule, MatButtonModule, MatBadgeModule, MatIconModule];

import { PodcastRoutingModule } from './podcast-routing.module';
import { PodcastComponent } from './podcast.component';

@NgModule({
  declarations: [PodcastComponent],
  imports: [CommonModule, PodcastRoutingModule, ...materialImports]
})
export class PodcastModule {}
