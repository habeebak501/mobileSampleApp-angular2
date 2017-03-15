import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{APP_ROUTES_PROVIDER} from './app.router';
import{AuthServices} from './services/auth.service';
import{LogInServices} from 'app/services/logIn-auth.service';
import { EqualValidator } from './directives/equal-validate.component';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

import { getJsonDataService } from 'app/services/loadData.service';
import{AlertService} from 'app/services/alert.service';
import { AlertComponent } from 'app/directives/alert.component';
import { LoginRequireResolver } from './resolver/login-require.service';
import{KeysPipe} from './pipes/key.pipe';
import { ProductDetailsComponent } from 'app/productDetails/product-details.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {CategoryFilterPipe} from './pipes/categoryPipe';
import {OnlyKeysPipe} from './pipes/only-keys.pipe';
import{SharedataService} from './services/sharedData.service';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    EqualValidator,
    HomeComponent,AlertComponent, ProductDetailsComponent, AllproductsComponent, SideBarComponent,
    CategoryFilterPipe,OnlyKeysPipe,KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [AuthServices,LogInServices,getJsonDataService,AlertService,LoginRequireResolver,
  SharedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
