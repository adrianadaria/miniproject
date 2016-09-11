"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 11, price: 109.90, name: 'Nike Roshe Run Premium Holiday' },
    { id: 12, price: 109.90, name: 'Line Link 67009' },
    { id: 13, price: 120, name: 'Minimus Zero' },
    { id: 14, price: 150, name: 'Athletic Shoe' },
    { id: 15, price: 139.90, name: 'Veronique' },
    { id: 16, price: 99.90, name: 'Suede Boots' },
    { id: 17, price: 109, name: 'Barricade 6.0 ' },
    { id: 18, price: 79, name: 'Cotu Classic' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Products';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n<div class=\"row\">\n     <div class=\"prod\" *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        \n<img src=\"/public/assets/images/brand.jpg\"/>\n<img src=\"/public/assets/images/product.png\"/>\n              <hr>\n              <p> {{hero.name}} </p>\n             <button href=\"#\" class=\"btn_price\"> {{hero.price | currency:'USD':true}} | GET NOW  ></button>\n     </div>\n    \n    \n   \n    <div *ngIf=\"selectedHero\">\n      <h2>{{selectedHero.name}} details!</h2>\n      <div><label>Price: </label>{{selectedHero.price | currency:'USD':true}}</div>\n    </div>\n </div>\n  ",
            styles: ["\n    .selected {\n      border:1px solid red;\n    }\n  \n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map