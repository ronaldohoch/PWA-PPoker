import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from "./card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Planning Poker PWA';

  constructor(private http: HttpClient) { }

}