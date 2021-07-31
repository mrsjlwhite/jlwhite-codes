import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public base: BaseService) { }

  ngOnInit(): void {
    this.base.checkIfMorning();
  }

  goToLinkedIn() {
    this.base.goToLinkedIn();
  }

  goToResume() {
    this.base.goToResume();
  }

  goToGitHub() {
    this.base.goToGitHub();
  }
}
