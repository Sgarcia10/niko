import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}                           from '@angular/router';
import { AuthenticationService }      from '../_services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url.split("/")[1];
    return this.verifyRole(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `${route.path}`;
    // console.log("loading"+url);
    return this.verifyRole(url);
  }

  verifyRole(url){
    if ( localStorage.getItem('currentUser') ) {
      // logged in so return true
        let roleCurrentUser = JSON.parse(localStorage.getItem('currentUser')).role;
        // console.log(url+"  "+roleCurrentUser);
        let u = String(url).valueOf();
        let r = String(roleCurrentUser).valueOf();
        console.log(u+"  "+r);
        if (!(u===r)){
          this.router.navigate(['/not-found']);
          return false;
        }
        else return true;
    }
    this.router.navigate(['/not-found']);
    return false;

  }
}
