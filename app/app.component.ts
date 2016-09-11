import { Component } from '@angular/core';




@Component({
  selector: 'my-app',
  template: `
  
  <router-outlet></router-outlet>
  <my-footer></my-footer>
  `,
  styles: [`
    .selected {
      border:1px solid red;
    }
  
  `],
 
})
export class AppComponent  {
  
  }
