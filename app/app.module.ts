import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { FooterComponent} from './footer.component';
import { ProductComponent} from './product.component';
import { CategoriesComponent} from './categories.component';
import { SliderComponent} from './slider.component';
import { ContactComponent} from './contact.component';
import { routing } from './app.routing';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    FooterComponent,
    ProductComponent,
    CategoriesComponent,
    SliderComponent,
    ContactComponent
   
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }