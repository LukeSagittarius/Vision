import {NgModule} from '@angular/core';
import {MinisterialEffectsComponent} from './ministerial-effects/ministerial-effects.component';
import {MinisterialEffectAddComponent} from './ministerial-effect-add/ministerial-effect-add.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations:
    [
      MinisterialEffectsComponent,
      MinisterialEffectAddComponent
    ]
})
export class AdminModule {
}
