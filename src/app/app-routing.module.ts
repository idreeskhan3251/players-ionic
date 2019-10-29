import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'players',
    children: [
      {
        path: '',
        loadChildren:
          './players/players.module#PlayersPageModule'
      },
      {
        path: ':playerid',
        loadChildren: './singleplayer/singleplayer.module#SingleplayerPageModule'
      }
    ]
  },
  { path: 'form', loadChildren: './form/form.module#FormPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
