import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { CustomHttpProvider } from './_helpers/custom-http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth-guard.service';
import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService, UserService, MailService } from './_services/index';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
      CustomHttpProvider,
      AuthGuard,
      AlertService,
      AuthenticationService,
      UserService,
      MailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
