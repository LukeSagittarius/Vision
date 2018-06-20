import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, AbstractControl} from '@angular/forms';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {EducationProgram} from "../education-program";
import {EducationProgramService} from "../education-program.service";

@Component({
  selector: 'app-book-overview',
  templateUrl: './education-program-add.component.html'
})
export class EducationProgramAddComponent implements OnInit {
  @ViewChild('educationProgramAddForm') currentForm: NgForm;

  educationProgram: EducationProgram;

  submitted: boolean;

  private static createErrorMessage(errorObject: {[key: string]: any}): string {
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

  constructor(private educationProgramService: EducationProgramService, private route: ActivatedRoute, private router: Router) {
    this.educationProgram = new EducationProgram();
    this.submitted = false;
  }

  save(): void {
    this.submitted = true;
    if (this.currentForm && this.currentForm.form && this.currentForm.form.valid) {
      this.educationProgramService.save(this.educationProgram);
      this.router.navigate(['/admin/educationPrograms']);
      window.location.reload();
    }
  }

  getErrorMessageOfField(fieldName: string): string {
    if (this.isFieldInvalid(fieldName)) {
      const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
      return EducationProgramAddComponent.createErrorMessage(fieldControl.errors);
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
    return fieldControl && fieldControl.invalid && (fieldControl.touched || this.submitted);
  }

  ngOnInit(): void {
  }
}
