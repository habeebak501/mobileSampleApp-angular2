import { Component, OnInit } from '@angular/core';
import { User } from 'app/user.interface';
import {Router} from '@angular/router';
// import {AngularFire,AuthProviders,AuthMethods} from 'angularfire2';
import{LogInServices} from 'app/services/logIn-auth.service';
import{AlertService} from 'app/services/alert.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
   private loading: boolean = false;
     fullPath:string ='../assets/ImageLoading.gif';
  public user: User;
  public token;
  ngOnInit() {
    this.auth.skipIfLoggedIn();
    this.user = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  constructor(private auth:LogInServices,private _router: Router,private alertService: AlertService){}
  OnSignIn(model: User, isValid: boolean) {
    this.loading =true;
     this.auth.login(model.email,model.password).then((res) => {
    this.token=res;
    console.log(this.token)
     let token = JSON.stringify(this.token.uid);
    console.log("token:",token)
       localStorage.setItem('token',token);
    console.log( "token uid:", this.token.uid);
    console.log("refreshToken:", this.token.refreshToken)
       this.loading = false;
      this._router.navigate(['Home']);
    console.log(model.email);
    console.log(model.password)
  },
    error => { this.alertService.error("EmailId and Password not exit");
    }
  );
  }
  }
