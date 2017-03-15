import {RouterModule,Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HomeComponent } from "./home/home.component";
import { LoginRequireResolver } from './resolver/login-require.service';
import { ProductDetailsComponent } from 'app/productDetails/product-details.component';
import { AllproductsComponent } from './allproducts/allproducts.component';

const APP_ROUTES: Routes = [
  {path:'',redirectTo:'SignIn',pathMatch:'full'},
  { path: 'SignIn', component:SignInComponent },
  { path: 'SignUp', component: SignUpComponent},
   {path:'Home',component:HomeComponent,
   resolve : { loginRequire : LoginRequireResolver},
   children:[
     {path:'',component:AllproductsComponent},
     {path:'product',component:ProductDetailsComponent}
   ]
 }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
