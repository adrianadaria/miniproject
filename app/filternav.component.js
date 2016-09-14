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
var router_1 = require('@angular/router');
var product_service_1 = require('./product.service');
var FilternavComponent = (function () {
    function FilternavComponent(route, productService) {
        this.route = route;
        this.productService = productService;
    }
    FilternavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.productService.getProduct(id)
                .then(function (product) { return _this.product = product; });
        });
    };
    FilternavComponent.prototype.goBack = function () {
        window.history.back();
    };
    FilternavComponent = __decorate([
        core_1.Component({
            selector: 'my-filternav',
            templateUrl: 'app/filternav.component.html',
            styles: ['.gallery-picture { width: 300px; margin-top:100px; }']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, product_service_1.ProductService])
    ], FilternavComponent);
    return FilternavComponent;
}());
exports.FilternavComponent = FilternavComponent;
//# sourceMappingURL=filternav.component.js.map