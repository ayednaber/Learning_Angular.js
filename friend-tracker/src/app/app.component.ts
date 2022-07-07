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

  sayHello() {
    alert("Hello my friends!")
  }
}
