import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {productComponent} from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import {DiscountPipe} from './discount.pipe'; 
import {HighlightDirective} from './highlight.directive';
import {DisableProductDirective} from './disableProduct.directive';
import { DocumentsComponent } from './documents/documents.component';
import { BasicsComponent } from './documents/basics/basics.component';
import { ConceptsComponent } from './documents/concepts/concepts.component';
import { ExamplesComponent } from './documents/examples/examples.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent ,productComponent, NavbarComponent, SignupComponent,
     MainComponent, ProductDetailComponent, ProductFilterComponent, DiscountPipe, HighlightDirective,
     DisableProductDirective,
     DocumentsComponent,
     BasicsComponent,
     ConceptsComponent,
     ExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
