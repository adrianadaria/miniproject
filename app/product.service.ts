import { Injectable } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {
  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }
  // See the "Take it slow" appendix
  getProductsSlowly(): Promise<Product[]> {
    return new Promise<Product[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getProducts());
  }
}

