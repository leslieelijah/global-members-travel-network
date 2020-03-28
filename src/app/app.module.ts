import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialisingComponent } from './socialising/socialising.component';
import { BusinessComponent } from './business/business.component';
import { LocalKnowledgeComponent } from './local-knowledge/local-knowledge.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialisingComponent,
    BusinessComponent,
    LocalKnowledgeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
