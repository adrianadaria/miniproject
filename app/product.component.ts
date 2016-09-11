import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';



@Component({
  selector: 'my-products',
  templateUrl: 'app/product.component.html',
  styles: [`
    .selected {
      border:1px solid red;
    }
  
  `],
  
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  

  constructor(private router: Router, private productService: ProductService) { }

  



  ngOnInit(): void {
    this.productService.getProducts()
      .then(products => this.products = products.slice(1, 8));
  }

  gotoDetail(product: Product): void {
    let link = ['/detail', product.id];
    this.router.navigate(link);
  }
}