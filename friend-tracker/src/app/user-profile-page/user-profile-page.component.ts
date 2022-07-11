import { Component, OnInit } from '@angular/core';
import { Person } from 'src/types';
import { personData } from '../data';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {
  personData: Person = personData

  constructor() { }

  ngOnInit(): void {
  }

}
