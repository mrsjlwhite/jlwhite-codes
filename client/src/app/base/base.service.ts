import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  resumeUrl: string = "https://gitconnected.com/mrsjlwhite/resume";
  githubUrl: string = "https://github.com/mrsjlwhite";
  linkedinUrl: string = "https://www.linkedin.com/in/jeslyn-white/";

  isMorning: boolean = false;

  constructor() { }

  checkIfMorning() {
    var today = new Date();
    var time = today.getHours();
    var sunrise = 6; // 6am
    var sunset = 20; // 8pm
    this.isMorning = time < sunset && time > sunrise ? true : false;
  }

  goToResume() {
    location.assign(this.resumeUrl);
  }

  goToGitHub() {
    location.assign(this.githubUrl);
  }

  goToLinkedIn() {
    location.assign(this.linkedinUrl);
  }
}
