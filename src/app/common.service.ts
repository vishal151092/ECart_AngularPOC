import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
@Injectable()
export class CommonService{
name ="Service name";
getAllProductUrl='https://ashuapi.herokuapp.com/api/allproducts';
constructor(private http : HttpClient){
    //this.getAllProducts();
}
getDetails(name){
    console.log(`HI, This is service get Details function, name is: ${name}`);
}


}