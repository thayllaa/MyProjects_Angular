import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  selector: 'app-thaylla-random',
  templateUrl: './thaylla-random.component.html',
  styleUrls: ['./thaylla-random.component.css']
})
export class ThayllaRandomComponent implements OnInit {
  num: number = 1;

  constructor() { }

  ngOnInit() {
  }

  getNumbers() {
    let arr = [];
    for (let i = 1; i <= this.num; i++) {
      arr.push(Math.trunc(100 * Math.random()));
    }
    return arr;
  }
}