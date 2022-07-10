import { Component } from '@angular/core';
import { Person } from 'src/types';
import { friendsData, personData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friend-tracker';
  personData: Person = personData
  friendsData: Person[] = friendsData;

  favoritesIds: string[] = [];

  sayHello() {
    alert("Hello my friends!")
  }

  onPersonClicked(person: Person): void {
    alert(`${person.name} likes ${person.interests.join(', ')}`)
  }

  toggleFavorite(personId: string): void {
    if(this.favoritesIds.includes(personId)) {
      this.favoritesIds = this.favoritesIds.filter(id => id != personId)
    } else {
      this.favoritesIds.push(personId)
    }
  }
}
