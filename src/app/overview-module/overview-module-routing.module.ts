import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OverviewCompComponent } from "./overview-comp/overview-comp.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: OverviewCompComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewModuleRoutingModule {}
