import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../_services/index";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService : AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  private isLogin()
  {
    if(localStorage.getItem('currentUser'))
      return true;
    return false;
  }

  private inicio()
  {
    if ( localStorage.getItem('currentUser') ) {
      let roleCurrentUser = JSON.parse(localStorage.getItem('currentUser')).role;
      this.router.navigate([`/${roleCurrentUser}`]);
    }
    else
      this.router.navigate(['']);
  }

  private logout()
  {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
