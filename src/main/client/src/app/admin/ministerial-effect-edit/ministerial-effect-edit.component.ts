import { Component, OnInit, ViewChild } from "@angular/core";
import { MinisterialEffectService } from "../ministerial-effect.service";
import { MinisterialEffect } from "../ministerial-effect";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-book-overview',
  templateUrl: './ministerial-effect-edit.component.html'
})

export class MinisterialEffectEditComponent {
  @ViewChild('ministerialEffectEditForm') currentForm: NgForm;

  ministerialEffect: MinisterialEffect;
  submitted: boolean;

  constructor(private ministerialEffectService: MinisterialEffectService, private route: ActivatedRoute, private router: Router) {
    this.ministerialEffect = new MinisterialEffect();
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
      return MinisterialEffectEditComponent.createErrorMessage(fieldControl.errors);
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
    return fieldControl && fieldControl.invalid && (fieldControl.touched || this.submitted);
  }

  save(): void {
    this.submitted = true;
    if (this.currentForm.valid) {
      this.ministerialEffectService.edit(this.ministerialEffect);
      this.router.navigate(['/admin/ministerialEffects']);
      window.location.reload();
    }
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['ministerialEffectId']) {
        let ministerialEffectId: number = +params['ministerialEffectId'];
        let foundMinisterialEffect: MinisterialEffect = this.ministerialEffectService.findOne(ministerialEffectId);
        if (foundMinisterialEffect) {
          this.ministerialEffect = foundMinisterialEffect;
        } else {
          this.router.navigate(['/admin/ministerialEffects']);
        }
      }
    });

  }

}
