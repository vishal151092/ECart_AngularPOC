import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { BasicsComponent } from './documents/basics/basics.component';
import { ExamplesComponent } from './documents/examples/examples.component';
import { ConceptsComponent } from './documents/concepts/concepts.component';


const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'productList', component:AppComponent},
  {path: 'product/:id', component:ProductDetailComponent},
  {path: 'documents', component:DocumentsComponent , children:[
    {path: 'basics' , component:BasicsComponent},
    {path: 'concepts' , component:ConceptsComponent},
    {path: 'examples' , component:ExamplesComponent}
    
  ]},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: '**' , redirectTo:'login' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
