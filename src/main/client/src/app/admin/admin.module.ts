import {NgModule} from '@angular/core';
import {AdminAuthenticateComponent} from "./authenticate/admin-authenticate.component";
import {AdminUserListComponent} from './user-list/admin-user-list.component';
import {AdminUserAddComponent} from './user-add/admin-user-add.component';
import {AdminUserEditComponent} from './user-edit/admin-user-edit.component';
import {AdminManagePermissions} from './manage-permissions/admin-manage-permissions.component';
import {AdminDeviceListComponent} from './device-list/admin-device-list.component';
import {AdminDeviceEditComponent} from './device-edit/admin-device-list.component';
import {AdminDashboardComponent} from './dashboard/admin-dashboard.component';
import {AdminNavComponent} from './partials/nav/nav.component';
import {AdminMenuComponent} from './partials/menu/menu.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations:
    [
      AdminAuthenticateComponent,
      AdminUserAddComponent,
      AdminUserEditComponent,
      AdminUserListComponent,
      AdminManagePermissions,
      AdminDeviceListComponent,
      AdminDeviceEditComponent,
      AdminDashboardComponent,
      AdminNavComponent,
      AdminMenuComponent
    ]
})
export class AdminModule {
}
