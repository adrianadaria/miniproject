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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Products';
    }
    AppComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<div class=\"row\">\n\n    \n     <div class=\"prod\" *ngFor=\"let product of products\"\n        [class.selected]=\"product === selectedProduct\"\n        (click)=\"onSelect(product)\">\n        \n\n   <img [src]=\"product.brandurl\">\n   <img [src]=\"product.imageurl\">\n\n              <hr>\n              <p> {{product.name}} </p>\n             <button href=\"#\" class=\"btn_price\"> {{product.price | currency:'USD':true}} | GET NOW  ></button>\n\n\n      </div>\n    \n    <my-product-detail [product]=\"selectedProduct\"></my-product-detail>\n  </div>\n  ",
            styles: ["\n    .selected {\n      border:1px solid red;\n    }\n  \n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map