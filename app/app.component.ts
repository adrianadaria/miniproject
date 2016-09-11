import { Component } from '@angular/core';
export class Hero {
  id: number;
  price: string;
  name: string;

}
const HEROES: Hero[] = [
  { id: 11, price: 109.90, name: 'Nike Roshe Run Premium Holiday' },
  { id: 12, price: 109.90, name: 'Line Link 67009' },
  { id: 13, price: 120, name: 'Minimus Zero' },
  { id: 14, price: 150, name: 'Athletic Shoe' },
  { id: 15, price: 139.90, name: 'Veronique' },
  { id: 16, price: 99.90, name: 'Suede Boots' },
  { id: 17, price: 109, name: 'Barricade 6.0 ' },
  { id: 18, price: 79, name: 'Cotu Classic' },

];
@Component({
  selector: 'my-app',
  template: `

<div class="row">
     <div class="prod" *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        
<img src="/public/assets/images/brand.jpg"/>
<img src="/public/assets/images/product.png"/>
              <hr>
              <p> {{hero.name}} </p>
             <button href="#" class="btn_price"> {{hero.price | currency:'USD':true}} | GET NOW  ></button>
     </div>
    
    
   
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>Price: </label>{{selectedHero.price | currency:'USD':true}}</div>
    </div>
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
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
