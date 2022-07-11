import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { FriendDetailPageComponent } from './friend-detail-page/friend-detail-page.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileInfoComponent,
    PersonCardComponent,
    WelcomeBannerComponent,
    PeopleListComponent,
    FriendsPageComponent,
    UserProfilePageComponent,
    FriendDetailPageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
