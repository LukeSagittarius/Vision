import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, AbstractControl} from '@angular/forms';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {MinisterialEffect} from "../ministerial-effect";
import {MinisterialEffectService} from "../ministerial-effect.service";
import {MinisterialEffectsComponent} from "../ministerial-effects/ministerial-effects.component";

@Component({
  selector: 'app-book-overview',
  templateUrl: './ministerial-effect-add.component.html'
})
export class MinisterialEffectAddComponent implements OnInit {
  @ViewChild('ministerialEffectAddForm') currentForm: NgForm;

  ministerialEffect: MinisterialEffect;

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

  constructor(private ministerialEffectService: MinisterialEffectService, private route: ActivatedRoute, private router: Router) {
    this.ministerialEffect = new MinisterialEffect();
    this.submitted = false;
  }

  save(): void {
    this.submitted = true;
    if (this.currentForm && this.currentForm.form && this.currentForm.form.valid) {
      this.ministerialEffectService.save(this.ministerialEffect);
      this.router.navigate(['/admin/ministerialEffects']);
      window.location.reload();
    }
  }

  getErrorMessageOfField(fieldName: string): string {
    if (this.isFieldInvalid(fieldName)) {
      const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
      return MinisterialEffectAddComponent.createErrorMessage(fieldControl.errors);
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
    return fieldControl && fieldControl.invalid && (fieldControl.touched || this.submitted);
  }

  ngOnInit(): void {
  }
}
