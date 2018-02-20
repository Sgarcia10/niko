import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService, MailService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private model: any = {};
  private loading = false;
  private returnUrl: string;
  private height: number;
  private isLogin: boolean;

  constructor(
      private ngZone: NgZone,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private mailService: MailService,
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
                  this.isLogin = true;
                  this.router.navigate([`/${user.role}`]);
                  this.loading = false;
              },
              error => {

                  this.alertService.error(error);
                  this.loading = false;
              });
  }

  sendMail() {
      this.mailService.sendMail()
          .subscribe(
              info => {
                  console.log(info);
              },
              error => {
                  console.log(error);
              }
          );
  }
}
