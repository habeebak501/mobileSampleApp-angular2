import {User} from 'app/user.interface';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
declare var firebase : any;
@Injectable()
export class LogInServices {
  public userData;
  public auth: any;
    constructor(private router:Router) {
      this.auth = firebase.auth();
    }

  public login(userEmail: string, userPassword: string) {
       return new Promise((resolve, reject) => {
         this.auth.signInWithEmailAndPassword(userEmail, userPassword)
           .then(userData => resolve(userData),
             err => reject(err)
            //  alert("user name and password is in correct")
            );
       });

     }
     isAuthenticated(){
     if(localStorage.getItem('token'))
         return true;
     else
         return false;
 }

   loginRequired():Promise<any>{
  if(this.isAuthenticated()) {
       return Promise.resolve();
     }
     else {
       this.router.navigate(['/SignIn']);
     }
   }
 skipIfLoggedIn(): void{
      if(this.isAuthenticated())
      {
        console.log("adding")
          this.router.navigate(['/Home']);
        }
      else
      {
        // console.log("remove")
           this.router.navigate(['/SignIn']);

      }

  }
     public logout() {
       localStorage.clear();
       this.router.navigate(['']);
         window.history.forward();

    }

}
