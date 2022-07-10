import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/types';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  @Input() person: Person = {
    id: "",
    name: "",
    profilePicURL: "",
    age: 0,
    birthday:  "",
    bio:  "",
    interests: [],
  }
  

  constructor() { }

  ngOnInit(): void {
  }

  displayDetails(name: string, age: number): void {
    alert(`${name} is ${age} years old`)
  }

}
