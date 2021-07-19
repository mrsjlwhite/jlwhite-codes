import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base/base.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  isMorning: boolean = false;

  constructor(private base: BaseService) { }

  ngOnInit(): void {
    this.isMorning = this.base.checkIfMorning();
  }
}
