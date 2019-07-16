import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn =null;
  constructor(private router : Router) { 
    this.loggedIn = localStorage.token; 

  }
ngDoCheck(){
  if(localStorage.getItem('token')){
    this.loggedIn =localStorage.token;
  }
}

  logout(){
    localStorage.clear();
    this.loggedIn =null;
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
