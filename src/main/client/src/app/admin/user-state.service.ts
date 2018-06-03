import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable, Observer} from 'rxjs';
import { UserState } from 'app/admin/user-state';

@Injectable()
export class UserStateService {
    private states: UserState[] = [];
    private sequencer: number = 1;
    private statesFromBackend: boolean = false;

    constructor(private http: Http) {
    }

    findAll(): Observable<UserState[]> {
        return this.fetchStatusesFromBackend();
    }

    private fetchStatusesFromBackend(): Observable<UserState[]> {
        if (!this.statesFromBackend) {
            return this.http.get('http://localhost:4300/userStates').map((response) => {
                const json: any = response.json();
                if (json) {
                    json.states.forEach(((states: UserState) => this.states.push(states)));
                    this.sequencer = Math.max.apply(null, (this.states.map((state => state.id)))) + 1;
                }
                this.statesFromBackend = true;
                return this.states;
            });
        }

        return new Observable<UserState[]>((observer: Observer<UserState[]>) => {
            observer.next(this.states);
            observer.complete();
        });
    }
}
