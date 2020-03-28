import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialisingComponent } from './socialising/socialising.component';

const routes: Routes =
[
  {
    path: 'register',
    component: SocialisingComponent
  },
  {
    path: 'socialising',
    component: SocialisingComponent
  },
  {
    path: 'business',
    component: SocialisingComponent
  },
  {
    path: 'local-knowledge',
    component: SocialisingComponent
  },
  {
    path: '**',
    redirectTo: '/register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
