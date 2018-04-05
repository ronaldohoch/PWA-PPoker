import { Injectable } from '@angular/core';

@Injectable()
export class VibrationService {

  constructor() { }

  setVibrate(): void{
    if(navigator.vibrate){
      navigator.vibrate(200);
    }
  }

}
