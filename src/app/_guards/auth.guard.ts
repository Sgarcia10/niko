import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService }      from '../_services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if ( localStorage.getItem('currentUser') ) {
          // logged in so return true
          console.log("Inicio");
            let roleCurrentUser = JSON.parse(localStorage.getItem('currentUser')).role;
            this.authenticationService.verifyRole()
                .subscribe(
                    role => {
                        if ( role === roleCurrentUser)
                          return true;

                        this.router.navigate(['/']);
                        return false;
                    },
                    error => {
                        this.router.navigate(['/']);
                        return false;
                    });

        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['']);
        // this.router.navigate([''], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
