import { Component, OnInit } from '@angular/core';
import { User } from 'app/user.interface';
import {Router} from '@angular/router';
// import {AngularFire,AuthProviders,AuthMethods} from 'angularfire2';
import{AuthServices} from 'app/services/auth.service';
import{AlertService} from 'app/services/alert.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public user: User;
  public message;
  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  constructor(private auth:AuthServices,private _router: Router,private alertService: AlertService){
  }

  OnSignUp(model: User, isValid: boolean) {
    console.log("model")
    this.auth.signupUser(model).then((res) =>{
    ()=>  console.log(res)
    // this.alertService.success("signup is successfully");
//       this._router.navigate(['/SignIn']);
//       console.log(model, isValid);
//       console.log("userName:",model.username )
//       console.log("email:",model.email)
//       console.log("password:",model.password)
//       console.log("confirmPassword:",model.confirmPassword)
 })
 alert("your details are recorded");
}
}
