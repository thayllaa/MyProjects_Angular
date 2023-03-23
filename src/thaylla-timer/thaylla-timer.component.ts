import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-thaylla-timer',
  templateUrl: './thaylla-timer.component.html',
  styleUrls: ['./thaylla-timer.component.css']
})
export class ThayllaTimerComponent implements OnInit {
  counter: number = 0;

  constructor() {
    const timer = setInterval(() => {
      this.counter = this.counter + 1;
    }, 1000);
  }

  getSec() {
    return Math.trunc(this.counter % 60);
  }

  getMin() {
    return Math.trunc(this.counter/60);
  }

  ngOnInit() {
  }
}