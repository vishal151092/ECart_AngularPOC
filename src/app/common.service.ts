import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
@Injectable()
export class CommonService{
name ="Service name";
filterRange = 0;
getAllProductUrl='https://ashuapi.herokuapp.com/api/allproducts';
constructor(private http : HttpClient){
    //this.getAllProducts();
}
getDetails(name){
    console.log(`HI, This is service get Details function, name is: ${name}`);
}

updateProductFilter(range){
this.filterRange=range;
console.log(`in filter service: range: ${range} , serviceVariable: ${this.filterRange}` );
}


}