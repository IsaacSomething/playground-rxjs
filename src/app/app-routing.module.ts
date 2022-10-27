import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const mainMenuRouteProps: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { icon: 'home' }
  },
  {
    path: 'podcasts',
    title: 'Podcasts',
    loadChildren: () => import('./podcasts/podcasts.module').then(m => m.PodcastsModule),
    data: { icon: 'podcasts' }
  },
  {
    path: 'episodes',
    title: 'Episodes',
    loadChildren: () => import('./episodes/episodes.module').then(m => m.EpisodesModule),
    data: { icon: 'volume_up' }
  },
  {
    path: 'users',
    title: 'Users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    data: { icon: 'person' }
  }
];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  ...mainMenuRouteProps,
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
