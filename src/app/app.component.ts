import { Component } from '@angular/core';
import{LogInServices} from 'app/services/logIn-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
constructor(private auth:LogInServices) {
}
// onLogOut(){
//   this.auth.logout();
// }
}
