import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'shop', component: ShopComponent},
    {path:'contact', component: ContactComponent},
    {path:'add-to-cart', component: AddToCartComponent},
    {path: 'login', component: LoginComponent}
    
];

