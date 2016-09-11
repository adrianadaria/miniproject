import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `
  <my-slider></my-slider>
  
  <a routerLink="/contact" routerLinkActive="active">Contact</a>
  <router-outlet></router-outlet>
  <my-footer></my-footer>
  `,
  styles: [`
    .selected {
      border:1px solid red;
    }
  
  `]
})
export class AppComponent  {
  
  }
