import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule } from 'primeng/primeng';
import { MenuItem, MenubarModule, ButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { MenSeniorComponent } from './men-senior/men-senior.component';
import { MenSeniorDetailComponent } from './men-senior-detail/men-senior-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    AboutComponent,
    MenSeniorComponent,
    MenSeniorDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ButtonModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
