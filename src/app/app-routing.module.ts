import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'heroes-list',
    loadChildren: () =>
      import('./heroes-list/heroes-list.module').then(
        (m) => m.HeroesListPageModule
      ),
  },
  {
    path: 'heroes-detail',
    loadChildren: () =>
      import('./heroes-detail/heroes-detail.module').then(
        (m) => m.HeroesDetailPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
