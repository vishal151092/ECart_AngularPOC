import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { range } from 'rxjs';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  constructor( private cs : CommonService) {

   }

  ngOnInit() {
  }

  filterProduct(range){
    console.log("in filter method");
this.cs.updateProductFilter(range);
  }

}
