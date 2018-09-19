import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "prelim", pathMatch: "full" },
  {
    path: "prelim",
    loadChildren:
      "../app/preliminary-module/preliminary-module.module#PreliminaryModuleModule"
  },
  {
    path: "quiz",
    loadChildren: "../app/quiz-module/quiz-module.module#QuizModuleModule"
  },
  {
    path: "overview",
    loadChildren:
      "../app/overview-module/overview-module.module#OverviewModuleModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
