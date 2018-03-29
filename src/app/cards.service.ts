import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARD } from "./mock-card"

@Injectable()
export class CardsService {

  constructor() { }

  getCards(): Card[]{
    return CARD;
  }

}
