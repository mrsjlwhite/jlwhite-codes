import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base/base.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  isMorning: boolean = false;

  constructor(public base: BaseService) { }

  ngOnInit(): void {
    this.isMorning = this.base.checkIfMorning();
  }
}
