import { Component } from '@angular/core';
import { BaseService } from './base/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public base: BaseService) { }

  ngOnInit(): void {
    this.base.checkIfMorning();
  }
}
