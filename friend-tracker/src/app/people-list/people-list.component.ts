import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/types';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  @Input() people: Person[] = [];
  @Input() clickPersonFn: (personId: string) => void = () => {};

  // @Output() clickPerson = new EventEmitter<string>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  personClicked(personID: string): void {
    this.clickPersonFn(personID); 
  }

}
