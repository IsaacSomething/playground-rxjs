import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
const materialImports = [MatCardModule, MatGridListModule, MatButtonModule, MatTabsModule];

import { LoaderComponent } from '@base/components/loader';
const standaloneImports = [LoaderComponent];

import { PodcastsRoutingModule } from './podcasts-routing.module';
import { PodcastsComponent } from './podcasts.component';

@NgModule({
  declarations: [PodcastsComponent],
  imports: [CommonModule, PodcastsRoutingModule, ...materialImports, ...standaloneImports]
})
export class PodcastsModule {}
