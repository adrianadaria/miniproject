import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';




@Component({
  selector: 'my-filternav',
  templateUrl: 'app/filternav.component.html',
   styles: ['.gallery-picture { width: 300px; margin-top:100px; }']
 

  
})
export class FilternavComponent implements OnInit{

  product: Product;
  
  

  constructor(private route: ActivatedRoute, private productService: ProductService) { }


  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.productService.getProduct(id)
        .then(product => this.product = product);
    });
  }
goBack(): void {
    window.history.back();
  }



}
  
