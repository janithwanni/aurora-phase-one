import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginDialogCompComponent} from "./preliminary-module/login-dialog-comp/login-dialog-comp.component";
import {QuestionViewCompComponent} from "./quiz-module/question-view-comp/question-view-comp.component";
import {RulesRegulationCompComponent} from "./preliminary-module/rules-regulation-comp/rules-regulation-comp.component";
import {OverviewCompComponent} from "./overview-module/overview-comp/overview-comp.component";

const appRoutes: Routes = [
  {path: "main", component: OverviewCompComponent},
  {path: "rules", component: RulesRegulationCompComponent},
  {path: "question", component: QuestionViewCompComponent},
  {path: "login", component: LoginDialogCompComponent},
  {path: "", pathMatch: "full", redirectTo: "/login"},
  // {path: "main", pathMatch: "full", redirectTo: "/main/dashboard"}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
