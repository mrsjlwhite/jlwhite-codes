import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../base/base.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isMorning: boolean = false;
  isSwitchedOn: boolean = false;

  constructor(private base: BaseService) { }

  ngOnInit(): void {
    this.isMorning = true; //this.base.checkIfMorning();
  }

  onChange($event: any) {
    console.log('onChange', $event);
    this.isMorning = $event;
  }

}
