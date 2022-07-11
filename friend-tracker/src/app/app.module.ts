import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileInfoComponent,
    PersonCardComponent,
    WelcomeBannerComponent,
    PeopleListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
