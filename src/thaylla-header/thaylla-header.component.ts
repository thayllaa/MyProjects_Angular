import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-thaylla-header',
  templateUrl: './thaylla-header.component.html',
  styleUrls: ['./thaylla-header.component.css']
})
export class ThayllaHeaderComponent implements OnInit {
  name: String = "Thaylla & Projects";
  
  constructor() { }

  ngOnInit() {
  }

}