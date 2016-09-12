import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent }   from './product.component';
import { ContactComponent }  from './contact.component';
import { FilternavComponent }  from './filternav.component';




const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: ProductComponent
    
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  
    {
    path: 'filternav',
    component: FilternavComponent
  },
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);