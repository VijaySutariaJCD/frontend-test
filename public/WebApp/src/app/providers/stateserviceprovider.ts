import { Injectable } from '@angular/core';
import { AppGlobals } from '../global/AppGlobals';
import { Http } from '@angular/http';

@Injectable()
export class StateService {
    httpRequest;
    appGlobals;
    
    constructor(http: Http, _AppGlobals: AppGlobals) {
        this.httpRequest = http;
        this.appGlobals = _AppGlobals;
    }

    GetStates(pageNo, sortOn) {
        let query = 'sort=' + sortOn + '&offset=' + pageNo
        return this.httpRequest.get(this.appGlobals.ApiURL + "States?" + query);
    }

    GetState(abbr: string) {
        return this.httpRequest.get(this.appGlobals.ApiURL + "states/" + abbr);
    }
}