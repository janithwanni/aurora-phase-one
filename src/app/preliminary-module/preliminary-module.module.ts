import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreliminaryModuleRoutingModule } from './preliminary-module-routing.module';
import { LoginDialogCompComponent } from './login-dialog-comp/login-dialog-comp.component';
import { RulesRegulationCompComponent } from './rules-regulation-comp/rules-regulation-comp.component';

@NgModule({
  imports: [
    CommonModule,
    PreliminaryModuleRoutingModule
  ],
  declarations: [LoginDialogCompComponent, RulesRegulationCompComponent]
})
export class PreliminaryModuleModule { }
