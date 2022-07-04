import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  // templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  template: `
      <h2>{{ "Title: " + getTitle() }}</h2>
        <ul>
          <li *ngFor="let course of courses">
            {{ course }}
          </li>
        </ul>
      `
})
export class CoursesComponent implements OnInit {
  title = "List of courses";
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  
  getTitle() {
    return this.title;
  }

  ngOnInit(): void {
  }

}
