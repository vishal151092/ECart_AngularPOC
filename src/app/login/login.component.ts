import {Component} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
selector : 'app-login',
templateUrl : './login.component.html' 
})
export class LoginComponent{
name :any  ="";
maxlengthPhone :number = 8;
email: string = "";
address : string="some place"
password : string = "";
phoneNumber : string = "";
postLoginUrl ='https://ashuapi.herokuapp.com/api/login';
constructor(private http : HttpClient, private router :Router){
    this.name = 10;
    this.maxlengthPhone=10;

if(localStorage.getItem('token')){
    this.router.navigate(['/']);
}

}

login(){
    var obj = {
        email : this.email,
        password : this.password,
        phone : this.phoneNumber
    }
    console.log("users address is :: "+ JSON.stringify(obj) );


    this.loginService(this.email, this.password);

    localStorage.setItem("email", this.email);
    localStorage.setItem("password", this.password);
    localStorage.setItem("phoneNumber", this.phoneNumber);

}

loginService(email, password){
      let obj={'email':email,'password':password};
    this.http.post(this.postLoginUrl,obj ).subscribe((response)=>{
      
        localStorage.setItem("email", response["email"]);
        localStorage.setItem("password", response["password"]);
        localStorage.setItem("token",response["token"] );
        localStorage.setItem("role", response["role"]);
console.log(`User ${localStorage.getItem('email')} is successfully logged In.`);
this.router.navigate(['/']);
    },function(error){
console.log(`error msg : ${JSON.stringify(error)}`)
    })
}

}