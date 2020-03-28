import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialisingComponent } from './socialising/socialising.component';
import { RegisterComponent } from './register/register.component';
import { BusinessComponent } from './business/business.component';
import { LocalKnowledgeComponent } from './local-knowledge/local-knowledge.component';

const routes: Routes =
[
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'socialising',
    component: SocialisingComponent
  },
  {
    path: 'business',
    component: BusinessComponent
  },
  {
    path: 'local-knowledge',
    component: LocalKnowledgeComponent
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
