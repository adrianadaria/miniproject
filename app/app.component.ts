import { Component } from '@angular/core';
import { Product } from './product';



@Component({
  selector: 'my-app',
  template: `
<div class="row">

    
     <div class="prod" *ngFor="let product of products"
        [class.selected]="product === selectedProduct"
        (click)="onSelect(product)">
        

   <img [src]="product.brandurl">
   <img [src]="product.imageurl">

              <hr>
              <p> {{product.name}} </p>
             <button href="#" class="btn_price"> {{product.price | currency:'USD':true}} | GET NOW  ></button>


      </div>
    
    <my-product-detail [product]="selectedProduct"></my-product-detail>
  </div>
  `,
  styles: [`
    .selected {
      border:1px solid red;
    }
  
  `]
})
export class AppComponent {
  title = 'Products';
  products: Product[];
  selectedProduct: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
