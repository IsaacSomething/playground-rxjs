import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
const moduleImports = [FlexLayoutModule];

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
const materialImports = [MatCardModule, MatGridListModule, MatButtonModule, MatProgressBarModule, MatTabsModule];

import { HeaderComponent } from '@base/components/header';
const standaloneImports = [HeaderComponent];

import { PodcastsRoutingModule } from './podcasts-routing.module';
import { PodcastsComponent } from './podcasts.component';

@NgModule({
  declarations: [PodcastsComponent],
  imports: [CommonModule, PodcastsRoutingModule, ...moduleImports, ...materialImports, ...standaloneImports]
})
export class PodcastsModule {}
