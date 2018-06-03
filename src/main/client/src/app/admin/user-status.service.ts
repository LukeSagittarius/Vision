import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable, Observer} from 'rxjs';
import {UserStatus} from './user-status';

@Injectable()
export class UserStatusService {
    private statuses: UserStatus[] = [];
    private sequencer: number = 1;
    private statusesFromBackend: boolean = false;

    constructor(private http: Http) {
    }

    findAll(): Observable<UserStatus[]> {
        return this.fetchStatusesFromBackend();
    }

    private fetchStatusesFromBackend(): Observable<UserStatus[]> {
        if (!this.statusesFromBackend) {
            return this.http.get('http://localhost:4300/userStatuses').map((response) => {
                const json: any = response.json();
                if (json) {
                    json.userStatuses.forEach(((statuses: UserStatus) => this.statuses.push(statuses)));
                    this.sequencer = Math.max.apply(null, (this.statuses.map((status => status.id)))) + 1;
                }
                this.statusesFromBackend = true;
                return this.statuses; 
            });
        }

        return new Observable<UserStatus[]>((observer: Observer<UserStatus[]>) => {
            observer.next(this.statuses);
            observer.complete();
        });
    }
}
