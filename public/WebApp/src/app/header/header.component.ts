import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service'
import { AppGlobals } from '../global/AppGlobals';
import { LoginService } from '../providers/loginServiceProvider';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appGlobals;
  cookieService;
  loginService;
  constructor(_AppGlobals: AppGlobals, _cookieService: CookieService, _loginService: LoginService) {
    this.appGlobals = _AppGlobals;
    this.cookieService = _cookieService;
    this.loginService = _loginService;
  }

  ngOnInit() {
  }

  Logout = function (event) {
    this.cookieService.removeAll();
    this.loginService.logOutUser().subscribe(
      () => {
        this.appGlobals.IsValidUser = false;
      },
      err => {
        console.error(err);
      }
    );
  }
}
