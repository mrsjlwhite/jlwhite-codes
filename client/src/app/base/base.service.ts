import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  checkIfMorning() {
    var today = new Date();
    var time = today.getHours();
    // var sunset = 20; // 8pm
    var sunset = 21; // 9pm
    return time < sunset ? true : false;
  }
}
