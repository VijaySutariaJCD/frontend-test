import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {
  public IsValidUser: boolean = false;
  public ApiURL: string = 'http://localhost:8888/';
  
  setIsValidUser(isValid) {
    this.IsValidUser = isValid;
  }
}