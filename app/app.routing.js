"use strict";
var router_1 = require('@angular/router');
var product_component_1 = require('./product.component');
var contact_component_1 = require('./contact.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/homepage',
        pathMatch: 'full'
    },
    {
        path: 'homepage',
        component: product_component_1.ProductComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map