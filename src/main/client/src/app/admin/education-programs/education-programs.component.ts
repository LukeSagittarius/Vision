import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, AbstractControl } from '@angular/forms';
import {EducationProgram} from "../education-program";
import {EducationProgramService} from "../education-program.service";

@Component({
  selector: 'app-book-overview',
  templateUrl: './education-programs.component.html'
})

export class EducationProgramsComponent implements OnInit {
  @ViewChild('educationProgramDeleteForm') currentForm: NgForm;

  educationPrograms:  EducationProgram[];

  constructor(private educationProgramService: EducationProgramService) {
  }

  delete(): void {
    this.educationProgramService.delete(this.currentForm.form.get('id').value);
    window.location.reload();
  }

  ngOnInit(): void {
    this.educationProgramService.findAll().subscribe(
      educationPrograms => this.educationPrograms = educationPrograms
    );
  }

}
