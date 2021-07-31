import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../base/base.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(public base: BaseService) { }

  ngOnInit(): void {
    this.base.checkIfMorning();
  }
}
