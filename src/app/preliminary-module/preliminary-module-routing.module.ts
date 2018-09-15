import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginDialogCompComponent } from "./login-dialog-comp/login-dialog-comp.component";
import { RulesRegulationCompComponent } from "./rules-regulation-comp/rules-regulation-comp.component";

const routes: Routes = [
  { path: "", component: LoginDialogCompComponent, pathMatch: "full" },
  { path: "rules", component: RulesRegulationCompComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreliminaryModuleRoutingModule {}
