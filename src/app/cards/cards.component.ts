import { Component, OnInit } from '@angular/core';
import { Card } from "../card";
import { CARD } from "../mock-card";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  card: Card = {"cardId":0,"cardName":"0"};
  cards = CARD;

  onSelectCard(): void{

  }

  constructor() { }

  ngOnInit() {
  }

}
