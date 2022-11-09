import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PodcastRoutingModule } from './podcast-routing.module';
import { PodcastComponent } from './podcast.component';

@NgModule({
  declarations: [PodcastComponent],
  imports: [CommonModule, PodcastRoutingModule]
})
export class PodcastModule {}
