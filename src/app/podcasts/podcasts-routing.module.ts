import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastsComponent } from './podcasts.component';

const routes: Routes = [
  { path: '', component: PodcastsComponent },
  { path: ':uuid', title: 'Podcast', loadChildren: () => import('./podcast/podcast.module').then(m => m.PodcastModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastsRoutingModule {}
