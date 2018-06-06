import { Component, OnInit, ViewChild } from "@angular/core";
import { MinisterialEffect } from '../ministerial-effect';
import { MinisterialEffectService } from '../ministerial-effect.service';
import { NgForm, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-book-overview',
  templateUrl: './ministerial-effects.component.html'
})

export class MinisterialEffectsComponent implements OnInit {
  @ViewChild('ministerialEffectsDeleteForm') currentForm: NgForm;

  ministerialEffects:  MinisterialEffect[];

  constructor(private ministerialEffectsService: MinisterialEffectService) {
  }

  delete(): void {
    this.ministerialEffectsService.delete(this.currentForm.form.get('id').value);
    window.location.reload();
  }

  ngOnInit(): void {
    this.ministerialEffectsService.findAll().subscribe(
      ministerialEffects => this.ministerialEffects = ministerialEffects
    );
  }

}
