import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('user')) {
      const { uid } = JSON.parse(localStorage.getItem('user'));
      if (uid) return true;
      return false;
    }
    
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
