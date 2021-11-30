import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('toggleClick', [
      state('true', style({
        backgroundColor: 'green'
      })),
      state('false', style({
        backgroundColor: 'red'
      })),
      transition('true => false', animate('1000ms linear')),
      transition('false => true', animate('1000ms linear'))
    ]),
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'violet'
      })),
      state('closed', style({
        height: '20px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],

  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Test';
  isGreen: string = 'true';
  isOpen = true;

  toggleIsCorrect() {
    this.isGreen = this.isGreen === 'true' ? 'false' : 'true'; // change in data-bound value
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
