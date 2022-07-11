import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/types';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
  @Input() person!: Person

  @Output() select = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cardClicked(): void {
    this.select.emit(this.person.id)
  }

}
