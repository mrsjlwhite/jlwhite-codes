import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMorning: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isMorning = this.checkTime();
  }

  //TODO: move to service/directive
  checkTime(): boolean {
    var today = new Date();
    var time = today.getUTCHours();
    return time >= 12 ? true : false;
  }

}
