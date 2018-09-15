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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
