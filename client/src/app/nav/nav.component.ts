import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base/base.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isMorning: boolean = false;

  constructor(private base: BaseService) { }

  ngOnInit(): void {
    this.isMorning = this.base.checkIfMorning();
  }

}
