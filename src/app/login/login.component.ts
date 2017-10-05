import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
  height;
  isLogin : boolean = false;

  constructor(
      private ngZone:NgZone,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService)
  {
        // window.onresize = (e) =>
        // {
        //     ngZone.run(() => {
        //         this.height = window.innerHeight;
        //     });
        // };
  }

  ngOnInit() {

      this.height = window.innerHeight;
      // reset login status
      this.authenticationService.logout();
      this.isLogin = false;
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
              user => {
                  this.isLogin = true
                  this.router.navigate([`/${user.role}`]);
                  this.loading = false;
              },
              error => {

                  this.alertService.error(error);
                  this.loading = false;
              });
  }


}
