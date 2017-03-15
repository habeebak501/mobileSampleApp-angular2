import {User} from 'app/user.interface';
import {Injectable} from '@angular/core';

declare var firebase : any;
@Injectable()
export class AuthServices {
  signupUser(user:User){
     return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .catch(function(error) {
           return error;
});
  });
}
}
