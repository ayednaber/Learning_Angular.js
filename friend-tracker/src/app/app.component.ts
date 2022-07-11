import { Component, OnInit } from '@angular/core';
import { Person } from 'src/types';
import { friendsData, personData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'friend-tracker';
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

  ngOnInit(): void {
  }

  sayHello() {
    alert("Hello my friends!")
  }

  onPersonClicked(person: Person): void {
    alert(`${person.name} likes ${person.interests.join(', ')}`)
  }

  addFavorite(personId: string): void {
    this.favoritesIds.push(personId)
  }

  removeFavorite(personId: string): void {
    this.favoritesIds = this.favoritesIds.filter(id => id != personId)
  }
}
