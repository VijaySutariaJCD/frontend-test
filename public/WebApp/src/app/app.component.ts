import { Component } from '@angular/core';
import { AppGlobals } from './global/AppGlobals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Application';
  appGlobals;
  constructor(_AppGlobals: AppGlobals) {
    this.appGlobals = _AppGlobals;
  }
}
