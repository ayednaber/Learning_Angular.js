import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { FriendDetailPageComponent } from './friend-detail-page/friend-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: FriendsPageComponent
  },
  {
    path: 'user-profile',
    component: UserProfilePageComponent
  },
  {
    path: 'friends/:friendId',
    component: FriendDetailPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
