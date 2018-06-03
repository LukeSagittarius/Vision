import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Observer } from 'rxjs';
import { Device } from 'app/admin/device';

@Injectable()
export class DeviceService {
    private devices: Device[] = [];
    private sequencer: number = 1;
    private devicesFromBackend: boolean = false;

    constructor(private http: Http) {   
    }

    findAll(): Observable<Device[]> {
        return this.fetchDevicesFromBackend();
    }

    private fetchDevicesFromBackend(): Observable<Device[]> {
        if (!this.devicesFromBackend) {
            return this.http.get('http://localhost:4300/deviceList').map((response) => {
                const json: any = response.json();
                if (json) {
                    json.devices.forEach(((device: Device) => this.devices.push(device)));
                    this.sequencer = Math.max.apply(null, (this.devices.map((device => device.id)))) + 1;
                }
                this.devicesFromBackend = true;
                return this.devices;
            });
        }

        return new Observable<Device[]>((observer: Observer<Device[]>) => {
            observer.next(this.devices);
            observer.complete();
        });
    }
}
