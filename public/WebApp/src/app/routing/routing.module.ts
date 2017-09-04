import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from "./../state/state.component";
import { GuestBookComponent } from "./../guest-book/guest-book.component";

const routes: Routes = [
  { path: 'states', component: StateComponent },
  { path: 'guest-book', component: GuestBookComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }

export const routedComponents = [StateComponent, GuestBookComponent];