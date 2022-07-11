import { Component, OnInit } from '@angular/core';
import { Person } from 'src/types';
import { friendsData } from '../data';
import { personData } from '../data';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent {
  personData: Person = personData
  friendsData: Person[] = friendsData;

  favoritesIds: string[] = [];

  get favorites(): Person[] {
    return this.favoritesIds.map(id =>
      this.friendsData.find(friend => id === friend.id)!);
  }
  get nonFavorites(): Person[] {
    return this.friendsData.filter(friend => 
      !this.favoritesIds.includes(friend.id));
  }

  constructor() { }

  addFavorite(personId: string): void {
    this.favoritesIds.push(personId)
  }

  removeFavorite(personId: string): void {
    this.favoritesIds = this.favoritesIds.filter(id => id != personId)
  }

}
