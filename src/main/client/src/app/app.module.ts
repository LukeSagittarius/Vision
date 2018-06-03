import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { AdminModule } from './admin/admin.module';
import { UserGuiModule } from './user-gui/user-gui.module';
import { UserService } from './admin/user.service';
import { UserStatusService } from './admin/user-status.service';
import { DeviceService } from 'app/admin/device.service';
import { UserStateService } from 'app/admin/user-state.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    AdminModule,
    UserGuiModule
  ],
  providers: [
    UserService,
    UserStatusService,
    DeviceService,
    UserStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
