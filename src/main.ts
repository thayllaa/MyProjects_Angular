import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ThayllaHeaderComponent } from './thaylla-header/thaylla-header.component';
import { ThayllaRandomComponent } from './thaylla-random/thaylla-random.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    ThayllaHeaderComponent,
    ThayllaRandomComponent,
  ],
  templateUrl: './main.html',
})
export class App {
  name = 'Thaylla & Projects';
}

bootstrapApplication(App);
