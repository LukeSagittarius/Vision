import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { DeviceService } from "app/admin/device.service";
import { Device } from "app/admin/device";

@Component({
  selector: 'app-book-overview',
  templateUrl: './admin-device-list.component.html'
})

export class AdminDeviceListComponent implements OnInit {

  devices: Device[];

  constructor(private deviceService: DeviceService) {

  }

  ngOnInit(): void {
    this.deviceService.findAll().subscribe(
      devices => this.devices = devices
    );
  }

  thereAreDevicesToDisplay(): boolean {
    return this.devices && this.devices.length > 0;
  }

}
