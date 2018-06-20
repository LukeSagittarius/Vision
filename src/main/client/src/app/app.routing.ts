import {Routes} from "@angular/router";
import {MinisterialEffectsComponent} from "./admin/ministerial-effects/ministerial-effects.component";
import {MinisterialEffectAddComponent} from './admin/ministerial-effect-add/ministerial-effect-add.component';
import {MinisterialEffectEditComponent} from "./admin/ministerial-effect-edit/ministerial-effect-edit.component";
import {EducationProgramsComponent} from "./admin/education-programs/education-programs.component";
import {EducationProgramAddComponent} from "./admin/education-program-add/education-program-add.component";
import {EducationProgramEditComponent} from "./admin/education-program-edit/education-program-edit.component";

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
      },
      {
        path: 'ministerialEffects/edit/:ministerialEffectId',
        component: MinisterialEffectEditComponent
      },
      {
        path: 'educationPrograms',
        component: EducationProgramsComponent
      },
      {
        path: 'educationProgram/add',
        component: EducationProgramAddComponent
      },
      {
        path: 'educationProgram/edit/:educationProgramId',
        component: EducationProgramEditComponent
      }
    ]
  }
];
