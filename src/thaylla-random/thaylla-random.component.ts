import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-thaylla-random',
  templateUrl: './thaylla-random.component.html',
  styleUrls: ['./thaylla-random.component.css']
})
export class ThayllaRandomComponent implements OnInit {
  n: number = 10;

  constructor() { }

  ngOnInit() {
  }

  getNumbers() {
    let arr = [];
    for (let i = 1; i <= this.n; i++) {
      arr.push(Math.trunc(100 * Math.random()));
    }
    return arr;
  }
}