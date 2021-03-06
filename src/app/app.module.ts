import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule } from 'primeng/primeng';
import { MenuItem, MenubarModule, ButtonModule, DialogModule, InputTextModule, CalendarModule, PanelModule, DropdownModule, FieldsetModule } from 'primeng/primeng';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { MenSeniorComponent } from './men-senior/men-senior.component';
import { MenSeniorDetailComponent } from './men-senior-detail/men-senior-detail.component';
import { AdminComponent } from './admin/admin.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { SortAppsPipe } from './sort-apps.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    AboutComponent,
    MenSeniorComponent,
    MenSeniorDetailComponent,
    AdminComponent,
    EditPlayerComponent,
    SortAppsPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    DialogModule,
    CalendarModule,
    PanelModule,
    FieldsetModule,
    DropdownModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
