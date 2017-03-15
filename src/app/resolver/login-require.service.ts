
import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot } from '@angular/router';
import { LogInServices } from 'app/services/logIn-auth.service';

@Injectable()
export class LoginRequireResolver implements Resolve<any>{

  constructor(private LogInService : LogInServices) { }

  resolve(route: ActivatedRouteSnapshot): Promise<any> {
      return this.LogInService.loginRequired();
  }
}
