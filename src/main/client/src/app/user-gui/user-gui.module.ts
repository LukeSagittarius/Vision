import {NgModule} from '@angular/core';
import {AuthenticateComponent} from './authenticate/authenticate.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReadingComponent} from './readings/reading.component';
import {NavComponent} from './partials/nav/nav.component';

@NgModule({
  declarations: [
    AuthenticateComponent,
    DashboardComponent,
    ReadingComponent,
    NavComponent
  ]
})
export class UserGuiModule {
}
