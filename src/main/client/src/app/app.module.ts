import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { AdminModule } from './admin/admin.module';
import { MinisterialEffectService } from './admin/ministerial-effect.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    AdminModule
  ],
  providers: [
    MinisterialEffectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
