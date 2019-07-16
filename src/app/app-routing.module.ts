import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'productList', component:AppComponent},
  {path: 'product/:id', component:ProductDetailComponent},
  
  {path: '**' , redirectTo:'login' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
