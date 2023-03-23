import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ThayllaHeaderComponent } from './thaylla-header/thaylla-header.component';
import { ThayllaRandomComponent } from './thaylla-random/thaylla-random.component';
import { ThayllaTimerComponent } from './thaylla-timer/thaylla-timer.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    ThayllaHeaderComponent,
    ThayllaRandomComponent,
    ThayllaTimerComponent
  ],
  templateUrl: './main.html',
})
export class App {}

bootstrapApplication(App);
