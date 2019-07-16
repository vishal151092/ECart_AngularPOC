import {Component, Input} from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector:'app-product',
    templateUrl: './product.component.html',
    //providers:[CommonService]
})
export class productComponent{
productName : String = "";

constructor(private router : Router){

}


 @Input() product : any={
     name:'',
     price:0,
     productid:0,
     image:'',
     brand:''
 }


 showProductDetails(){
     let productUrl= `/product/${this.product.productid}`;
     this.router.navigate([productUrl]);
 }


}