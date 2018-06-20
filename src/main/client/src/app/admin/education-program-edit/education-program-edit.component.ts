import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm, AbstractControl } from '@angular/forms';
import {EducationProgram} from "../education-program";
import {EducationProgramService} from "../education-program.service";

@Component({
  selector: 'app-book-overview',
  templateUrl: './education-program-edit.component.html'
})

export class EducationProgramEditComponent {
  @ViewChild('educationProgramEditForm') currentForm: NgForm;

  educationProgram: EducationProgram;
  submitted: boolean;

  constructor(private educationProgramService: EducationProgramService, private route: ActivatedRoute, private router: Router) {
    this.educationProgram = new EducationProgram();
    this.submitted = false;
  }

  private static createErrorMessage(errorObject: { [key: string]: any }): string {
    if (errorObject) {
      for (let errorCode in errorObject) {
        if (errorObject.hasOwnProperty(errorCode)) {
          switch (errorCode) {
            case 'required':
              return 'Please provide a value';
            case 'maxlength':
              return 'The value is too long';
            default:
              return 'The value is wrong';
          }
        }
      }
    }
  };

  getErrorMessageOfField(fieldName: string): string {
    if (this.isFieldInvalid(fieldName)) {
      const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
      return EducationProgramEditComponent.createErrorMessage(fieldControl.errors);
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
    return fieldControl && fieldControl.invalid && (fieldControl.touched || this.submitted);
  }

  save(): void {
    this.submitted = true;
    if (this.currentForm.valid) {
      this.educationProgramService.edit(this.educationProgram);
      this.router.navigate(['/admin/educationPrograms']);
      window.location.reload();
    }
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['educationProgramId']) {
        let educationProgramId: number = +params['educationProgramId'];
        let foundEducationProgram: EducationProgram = this.educationProgramService.findOne(educationProgramId);
        if (foundEducationProgram) {
          this.educationProgram = foundEducationProgram;
        } else {
          this.router.navigate(['/admin/educationPrograms']);
        }
      }
    });

  }

}
