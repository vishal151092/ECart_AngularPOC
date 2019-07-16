import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  getProductDetailsUrl = 'https://ashuapi.herokuapp.com/api/product/';
product = {};
addedtoCart = false;
addTocartUrl = 'https://ashuapi.herokuapp.com/api/addtocart';
 productId=0;
  constructor(private activeroute : ActivatedRoute, private http : HttpClient) { 
 this.productId = this.activeroute.snapshot.params.id;
this.http.get(this.getProductDetailsUrl+this.productId).subscribe((response)=>{

  console.log(`response:: ${response['message']}`);
this.product = response['data'];

},(error)=>{
console.log(`error msg:: ${JSON.stringify(error)}`);
})

  }

  ngOnInit() {
  }

    addToCart(){
  let cart ={
    email: localStorage.getItem('email'),
    productId: this.productId,
    product:{
name:this.product['name'],
price:this.product['price'],
image:this.product['image']
    }
  }

  this.http.post(this.addTocartUrl, cart).subscribe((response)=>{
  console.log("added to Cart");
  this.addedtoCart = true;
  },(error)=>{
    console.log(`error msg:: ${JSON.stringify(error)}`);
  })
      
    }

}
