import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Observer } from 'rxjs';
import { User } from './user';

@Injectable()
export class UserService {
    private users: User[] = [];
    private sequencer: number = 1;
    private usersFromBackend: boolean = false;
    private headers: Headers;

    constructor(private http: Http) {
    }

    save(user: User): void {
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
        let body = 'email=' + user.email +
            '&firstName=' + user.firstName +
            '&lastName=' + user.lastName +
            '&password=' + user.password +
            '&isAdmin=' + user.isAdmin;
        this.http.post('http://localhost:8080/userAdd', body, options).map((response) => {
        }).subscribe();
    }

    edit(user: User): void {
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
        let body = 'id=' + user.id +
            '&email=' + user.email +
            '&firstName=' + user.firstName +
            '&lastName=' + user.lastName +
            '&password=' + user.password +
            '&isAdmin=' + user.isAdmin +
            '&isActive=' + user.isActive;
        this.http.post('http://localhost:8080/userEdit', body, options).map((response) => {
        }).subscribe();
    }

    delete(userId: any): void {
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
        let body = 'id=' + userId;
        this.http.post('http://localhost:8080/userDelete', body, options).map((response) => {
        }).subscribe();
    }


    findAll(): Observable<User[]> {
        return this.fetchUsersFromBackend();
    }

    findOne(id: number): User {
        const user = this.findById(id);
        if (user) {
            return Object.assign({}, user);
        }
    }

    private findById(id: number): User {
        for (const user of this.users) {
            if (user.id === id) {
                return user;
            }
        }
    }

    private fetchUsersFromBackend(): Observable<User[]> {
        if (!this.usersFromBackend) {
            return this.http.get('http://localhost:8080/users').map((response) => {
                const json: any = response.json();
                if (json) {
                    json.users.forEach(((user: User) => this.users.push(user)));
                    this.sequencer = Math.max.apply(null, (this.users.map((user => user.id)))) + 1;
                }
                this.usersFromBackend = true;
                return this.users;
            });
        }

        return new Observable<User[]>((observer: Observer<User[]>) => {
            observer.next(this.users);
            observer.complete();
        });
    }
}
