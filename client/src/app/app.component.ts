import { Component } from '@angular/core';
import { BaseService } from './base/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMorning: boolean = false;

  constructor(private base: BaseService) { }

  ngOnInit(): void {
    this.isMorning = this.base.checkIfMorning();
  }
}
