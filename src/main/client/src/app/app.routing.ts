import {Routes} from "@angular/router";
import {MinisterialEffectsComponent} from "./admin/ministerial-effects/ministerial-effects.component";
import {MinisterialEffectAddComponent} from './admin/ministerial-effect-add/ministerial-effect-add.component';

export const APP_ROUTES: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'ministerialEffects',
        component: MinisterialEffectsComponent
      },
      {
        path: 'ministerialEffects/add',
        component: MinisterialEffectAddComponent
      }
    ]
  }
];
