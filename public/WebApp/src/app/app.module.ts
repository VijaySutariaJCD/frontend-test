import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppGlobals } from './global/AppGlobals';
import { LoginService } from './providers/loginServiceProvider';
import { StateService } from './providers/stateserviceprovider';
import { LoginComponent } from './login/login.component';
import { StateComponent } from './state/state.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service'
import { RoutingModule } from "./routing/routing.module";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StaterenderComponent } from './state/staterender/staterender.component';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { GuestBookWriteComponent } from './guest-book/guest-book-write/guest-book-write.component';
import { httpFactory } from "./global/httpFactory";
import { ToasterModule, ToasterService } from 'angular2-toaster';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StateComponent,
    GuestBookComponent,
    HeaderComponent,
    StaterenderComponent,
    GuestBookWriteComponent
  ],
  entryComponents: [
    StaterenderComponent,
    GuestBookWriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    Ng2SmartTableModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    ToasterModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [AppGlobals, CookieService, LoginService, StateService, {
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
