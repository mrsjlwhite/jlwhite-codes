import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../base/base.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isSwitchedOn: boolean = false;

  constructor(public base: BaseService) { }

  ngOnInit(): void {
    this.base.checkIfMorning();
    this.isSwitchedOn = this.base.isMorning;
  }

  onChange($event: any) {
    this.base.isMorning = $event;
  }

}
