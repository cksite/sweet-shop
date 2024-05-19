import { Routes } from '@angular/router';
import { SignUpPageComponent } from "./MyComponents/sign-up-page/sign-up-page.component";
import { LoginPageComponent } from "./MyComponents/login-page/login-page.component";
import { NavbarComponent } from "./MyComponents/navbar/navbar.component";
import { HomePageComponent } from "./MyComponents/home-page/home-page.component";
import { ShopPageComponent } from './MyComponents/shop-page/shop-page.component';
import { CartPageComponent } from './MyComponents/cart-page/cart-page.component';
import { CheckoutPageComponent } from './MyComponents/checkout-page/checkout-page.component';
import { NotFoundPageComponent } from './MyComponents/AssetComponents/not-found-page/not-found-page.component';
import { PaymentGatewayComponent } from './MyComponents/payment-gateway/payment-gateway.component';
import { TrackComponent } from './MyComponents/track/track.component';


export const routes: Routes = [
    {path:'', component:HomePageComponent},
    {path:'login', component:LoginPageComponent},
    {path:'signup', component:SignUpPageComponent},
    {path:'shop', component:ShopPageComponent},
    {path:'cart', component:CartPageComponent},
    {path:'checkout', component:CheckoutPageComponent},
    {path:'404notfound', component:NotFoundPageComponent},
    {path:'payment', component:PaymentGatewayComponent},
    {path:'track', component:TrackComponent},
];




