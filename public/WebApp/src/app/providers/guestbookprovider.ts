import { Injectable } from '@angular/core';
import { AppGlobals } from '../global/AppGlobals';
import { Http } from '@angular/http';

@Injectable()
export class GuestBookService {
    httpRequest;
    appGlobals;
    constructor(http: Http, _AppGlobals: AppGlobals) {
        this.httpRequest = http;
        this.appGlobals = _AppGlobals;
    }

    readGuestBook() {
        return this.httpRequest.get(this.appGlobals.ApiURL + "read");
    }

    writeToGuestBook(phone, message) {
        var data = { "phone": phone, "message": message }
        return this.httpRequest.post(this.appGlobals.ApiURL + "write", data, { 'Content-Type': 'application/json' });
    }
}