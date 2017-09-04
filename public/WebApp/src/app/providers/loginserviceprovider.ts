import { Injectable } from '@angular/core';
import { AppGlobals } from '../global/AppGlobals';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class LoginService {
    httpRequest;
    appGlobals;
    constructor(http: Http, _AppGlobals: AppGlobals) {
        this.httpRequest = http;
        this.appGlobals = _AppGlobals;
    }

    validateUser(uName, Password) {
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // let options = new RequestOptions({ headers: headers, withCredentials: true });

        var data = { 'user': uName, 'password': Password };
        return this.httpRequest.post(this.appGlobals.ApiURL + "login", data);//, options
    }

    logOutUser() {
        return this.httpRequest.get(this.appGlobals.ApiURL + "logout");
    }
}