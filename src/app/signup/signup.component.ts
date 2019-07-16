import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user ={
  name: null,
  email: null,
  password:null
}
 postUrl ='https://ashuapi.herokuapp.com/api/register';
  constructor(private http: HttpClient) {

   }

  ngOnInit() {
  }

  signup(){
    console.log(`User Details ${JSON.stringify(this.user)}`)
  if(this.user.name && this.user.email && this.user.password){
    this.http.post(this.postUrl,this.user).subscribe(function(response){
      console.log(`Response from signup, ${JSON.stringify(response)}`);
    }, function(error){
      console.log(`Response from signup, ${error.message}`);
    })
  }
  }

}
