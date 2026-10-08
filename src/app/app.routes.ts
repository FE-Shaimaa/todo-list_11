import { Routes } from '@angular/router';
import { Products } from './products/products';
import { Details } from './details/details';
import { Login } from './login/login';
import { Register } from './register/register';
import { Cart } from './cart/cart';

export const routes: Routes = [
  { path: '', component: Products },
  { path: 'products', component: Products },
  { path: 'cart/:id', component: Cart },
  { path: 'product/:id', component: Details },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

];
