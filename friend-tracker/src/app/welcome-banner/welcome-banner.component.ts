import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/types';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.css']
})
export class WelcomeBannerComponent implements OnInit {
  @Input() person!: Person;

  isHidden: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideMessage(): void {
    this.isHidden = true
  }

}
