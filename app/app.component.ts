import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `
  <my-slider></my-slider>
  <my-categories></my-categories>
  <my-products></my-products>
  <my-footer></my-footer>
  `,
  styles: [`
    .selected {
      border:1px solid red;
    }
  
  `]
})
export class AppComponent implements OnInit {
  
  }
}