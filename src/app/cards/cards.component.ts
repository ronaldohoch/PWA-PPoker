import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';

import { VibrationService } from "../services/vibration.service";

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
  cardSelected = {};
  showModal = true;

  onSelectCard(planningCard): void{
    this.cardSelected = {};
    this.cardSelected = planningCard;
    this.showModal = false;
    this.vibrationService.setVibrate();
  }

  closeCard(): void{
    this.cardSelected = {};
    this.showModal = true;
  }

  constructor(private vibrationService: VibrationService) { }

  ngOnInit() {
  }

}
