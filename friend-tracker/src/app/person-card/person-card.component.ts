import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/types';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
  @Input() person!: Person

  constructor() { }

  ngOnInit(): void {
  }

}
