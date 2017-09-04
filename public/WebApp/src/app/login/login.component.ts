import { Component, OnInit } from '@angular/core';
import { AppGlobals } from '../global/AppGlobals';
import { LoginService } from '../providers/loginServiceProvider';
import { Router } from "@angular/router";
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userName = '';
  password = '';
  httpRequest;
  appGlobals;
  loginService;

  constructor(_AppGlobals: AppGlobals, _LoginService: LoginService, private router: Router, private toasterService: ToasterService) {
    this.appGlobals = _AppGlobals;
    this.loginService = _LoginService;
  }

  ngOnInit() {
    this.appGlobals.IsValidUser = false;
  }

  validateUser = function (event) {
    if (this.userName && this.password) {
      this.loginService.validateUser(this.userName, this.password).subscribe(
        () => {
          this.toasterService.pop('success', '', 'Welcome '+ this.userName);
          this.appGlobals.IsValidUser = true;
          this.router.navigate(['/states']);
        },
        err => {
          this.toasterService.pop('error', '', 'Invalid username or password');
          //console.error(err);
        }
      );
    }
    else {
      alert("Username and password are required");
    }
  }
}
