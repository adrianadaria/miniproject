import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { FooterComponent} from './footer.component';
import { ProductComponent} from './product.component';
import { CategoriesComponent} from './categories.component';
import { SliderComponent} from './slider.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    FooterComponent,
    ProductComponent,
    CategoriesComponent,
    SliderComponent
   
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }