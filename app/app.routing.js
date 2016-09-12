"use strict";
var router_1 = require('@angular/router');
var product_component_1 = require('./product.component');
var contact_component_1 = require('./contact.component');
var filternav_component_1 = require('./filternav.component');
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
    {
        path: 'filternav',
        component: filternav_component_1.FilternavComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map