import {Routes} from "@angular/router";
import {AdminAuthenticateComponent} from "./admin/authenticate/admin-authenticate.component";
import {AuthenticateComponent} from "./user-gui/authenticate/authenticate.component";
import {DashboardComponent} from "./user-gui/dashboard/dashboard.component";
import {ReadingComponent} from "./user-gui/readings/reading.component";
import {AdminUserListComponent} from "./admin/user-list/admin-user-list.component";
import {AdminUserAddComponent} from "./admin/user-add/admin-user-add.component";
import {AdminUserEditComponent} from "./admin/user-edit/admin-user-edit.component";
import {AdminManagePermissions} from "./admin/manage-permissions/admin-manage-permissions.component";
import {AdminDeviceListComponent} from "./admin/device-list/admin-device-list.component";
import {AdminDeviceEditComponent} from "./admin/device-edit/admin-device-list.component";
import {AdminDashboardComponent} from "./admin/dashboard/admin-dashboard.component";

export const APP_ROUTES: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: AdminAuthenticateComponent
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'userList',
        component: AdminUserListComponent
      },
      {
        path: 'userAdd',
        component: AdminUserAddComponent
      },
      {
        path: 'userEdit/:userId',
        component: AdminUserEditComponent
      },
      {
        path: 'managePermissions',
        component: AdminManagePermissions
      },
      {
        path: 'deviceList',
        component: AdminDeviceListComponent
      },
      {
        path: 'deviceEdit',
        component: AdminDeviceEditComponent
      }
    ]
  },
  {
    path: '',
    component: AuthenticateComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'reading',
    component: ReadingComponent
  }
];
