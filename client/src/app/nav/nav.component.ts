import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isMorning: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isMorning = this.checkTime();
  }

  checkTime(): boolean {
    var today = new Date();
    var time = today.getUTCHours();
    return time >= 12 ? true : false;
  }

}
