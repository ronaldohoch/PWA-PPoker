import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { Card } from "../card";
import { CARD } from "../mock-card";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  card: Card = {"cardId":0,"cardName":"0","isSelected":false};
  cards = CARD;

  onSelectCard(planningCard): void{
    for(let card in this.cards){
      this.cards[card].isSelected = false;
    }
    planningCard.isSelected = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
