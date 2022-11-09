import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
const moduleImports = [FlexLayoutModule];

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
const materialImports = [MatCardModule, MatGridListModule, MatButtonModule];

import { PodcastsRoutingModule } from './podcasts-routing.module';
import { PodcastsComponent } from './podcasts.component';

@NgModule({
  declarations: [PodcastsComponent],
  imports: [CommonModule, PodcastsRoutingModule, ...moduleImports, ...materialImports]
})
export class PodcastsModule {}
