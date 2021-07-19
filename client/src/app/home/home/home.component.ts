import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMorning: boolean = false;

  constructor(private base: BaseService) { }

  ngOnInit(): void {
    this.isMorning = this.base.checkIfMorning();
  }

}
