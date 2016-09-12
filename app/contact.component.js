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
var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());
var ContactComponent = (function () {
    function ContactComponent(router) {
        this.router = router;
        this.subject = ["Ask about product", "Return the product", "Ask a question"];
        this.model = new Contact();
        this.submitted = false;
    }
    ContactComponent.prototype.register = function () {
        this.submitted = true;
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'my-contact',
            templateUrl: 'app/contact.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map