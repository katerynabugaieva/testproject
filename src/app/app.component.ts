import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'adventcalendar2019';
let testvar = 0;

constructor() {
  testvar++;
}
}
