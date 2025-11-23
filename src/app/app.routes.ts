import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { Customers } from './pages/customers/customers';
import { Enterprises } from './pages/enterprises/enterprises';
import { Sells } from './pages/sells/sells';

export const routes: Routes = 
[{ path: 'productos', component: Products },
  { path: 'clientes', component: Customers },
  { path: 'ventas', component: Sells },
  { path: 'empresa', component: Enterprises },
  { path: '', redirectTo: 'productos', pathMatch: 'full' }
 ];
