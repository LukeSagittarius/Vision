import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Observer } from 'rxjs';
import { MinisterialEffect } from './ministerial-effect';

@Injectable()
export class MinisterialEffectService {
  private ministerialEffects: MinisterialEffect[] = [];
  private sequencer: number = 1;
  private ministerialEffectsFromBackend: boolean = false;
  private headers: Headers;

  constructor(private http: Http) {
  }

  save(ministerialEffect: MinisterialEffect): void {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({
      headers: headers
    });
    let body = 'code=' + ministerialEffect.code +
      '&name=' + ministerialEffect.name +
      '&profile=' + ministerialEffect.profile +
      '&stage=' + ministerialEffect.stage +
      '&area=' + ministerialEffect.area_id +
      '&description=' + ministerialEffect.description;

    this.http.post('http://localhost:8080/ministerialEffect/add', body, options).map((response) => {
    }).subscribe();
  }

  findAll(): Observable<MinisterialEffect[]> {
    return this.fetchMinisterialEffectsFromBackend();
  }

  private fetchMinisterialEffectsFromBackend(): Observable<MinisterialEffect[]> {
    if (!this.ministerialEffectsFromBackend) {
      return this.http.get('http://localhost:8080/ministerialEffect/all').map((response) => {
        const json: any = response.json();
          if (json) {
            json.forEach(((ministerialEffects: MinisterialEffect) => this.ministerialEffects.push(ministerialEffects)));
            this.sequencer = Math.max.apply(null, (this.ministerialEffects.map((ministerialEffects => ministerialEffects.id)))) + 1;
          }
        this.ministerialEffectsFromBackend = true;
        return this.ministerialEffects;
      });
    }

    return new Observable<MinisterialEffect[]>((observer: Observer<MinisterialEffect[]>) => {
      observer.next(this.ministerialEffects);
      observer.complete();
    });
  }

  delete(ministerialEffectId: any): void {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({
      headers: headers
    });
    let body = 'id=' + ministerialEffectId;
    this.http.post('http://localhost:8080/ministerialEffect/delete', body, options).map((response) => {
    }).subscribe();
  }

}
