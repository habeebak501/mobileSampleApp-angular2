import { Component, OnInit} from '@angular/core';
import{LogInServices} from 'app/services/logIn-auth.service';
import {Router} from '@angular/router';
// import{mobileArray} from '../mobile';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

constructor(private auth:LogInServices,private _router: Router) {}
  ngOnInit() {
  }
  onLogOut(){
     this.auth.logout();
   }

 }
