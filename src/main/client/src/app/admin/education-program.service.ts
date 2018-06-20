import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Observer } from 'rxjs';
import {minimalSetImpl} from "rxjs/util/Set";
import {EducationProgram} from "./education-program";
import {MinisterialEffect} from "./ministerial-effect";

@Injectable()
export class EducationProgramService {
  private educationPrograms: EducationProgram[] = [];
  private sequencer: number = 1;
  private educationProgramsFromBackend: boolean = false;
  private headers: Headers;

  constructor(private http: Http) {
  }

  save(educationProgram: EducationProgram): void {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({
      headers: headers
    });
    let body = 'course=' + educationProgram.course +
      '&type=' + educationProgram.type +
      '&cycle=' + educationProgram.cycle +
      '&title=' + educationProgram.title +
      '&degree=' + educationProgram.degree;

    this.http.post('http://localhost:8080/educationProgram/add', body, options).map((response) => {
    }).subscribe();
  }

  findAll(): Observable<EducationProgram[]> {
    return this.fetchEducationProgramsFromBackend();
  }

  private fetchEducationProgramsFromBackend(): Observable<EducationProgram[]> {
    if (!this.educationProgramsFromBackend) {
      return this.http.get('http://localhost:8080/educationProgram/all').map((response) => {
        const json: any = response.json();
        if (json) {
          json.forEach(((educationPrograms: EducationProgram) => this.educationPrograms.push(educationPrograms)));
          this.sequencer = Math.max.apply(null, (this.educationPrograms.map((educationPrograms => educationPrograms.id)))) + 1;
        }
        this.educationProgramsFromBackend = true;
        return this.educationPrograms;
      });
    }

    return new Observable<EducationProgram[]>((observer: Observer<EducationProgram[]>) => {
      observer.next(this.educationPrograms);
      observer.complete();
    });
  }

  delete(educationProgramId: any): void {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({
      headers: headers
    });
    let body = 'id=' + educationProgramId;
    this.http.post('http://localhost:8080/educationProgram/delete', body, options).map((response) => {
    }).subscribe();
  }

  findOne(id: number): EducationProgram {
    const educationProgram = this.findById(id);
    if (educationProgram) {
      return Object.assign({}, educationProgram);
    }
  }

  private findById(id: number): EducationProgram {
    for (const educationProgram of this.educationPrograms) {
      if (educationProgram.id === id) {
        return educationProgram;
      }
    }
  }

  edit(educationProgram: EducationProgram): void {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({
      headers: headers
    });
    let body = 'id=' + educationProgram.id +
      '&course=' + educationProgram.course +
      '&type=' + educationProgram.type +
      '&cycle=' + educationProgram.cycle +
      '&title=' + educationProgram.title +
      '&degree=' + educationProgram.degree;
    this.http.post('http://localhost:8080/educationProgram/edit', body, options).map((response) => {
    }).subscribe();
  }

}
