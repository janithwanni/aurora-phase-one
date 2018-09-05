import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginDialogCompComponent } from "./login-dialog-comp/login-dialog-comp.component";

const routes: Routes = [
  { path: "", component: LoginDialogCompComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreliminaryModuleRoutingModule {}
