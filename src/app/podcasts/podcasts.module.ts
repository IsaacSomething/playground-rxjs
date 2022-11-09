import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
const moduleImports = [FlexLayoutModule];

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
const materialImports = [MatCardModule, MatGridListModule, MatButtonModule, MatProgressBarModule];

import { PodcastsRoutingModule } from './podcasts-routing.module';
import { PodcastsComponent } from './podcasts.component';

@NgModule({
  declarations: [PodcastsComponent],
  imports: [CommonModule, PodcastsRoutingModule, ...moduleImports, ...materialImports]
})
export class PodcastsModule {}
