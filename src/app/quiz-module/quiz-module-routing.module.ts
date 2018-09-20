import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuestionViewCompComponent } from "./question-view-comp/question-view-comp.component";
import { TimeExceededCompComponent } from "./time-exceeded-comp/time-exceeded-comp.component";
import { CompetitionOverCompComponent } from "./competition-over-comp/competition-over-comp.component";
import { AnswerStatusDisplayCompComponent } from "./answer-status-display-comp/answer-status-display-comp.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: QuestionViewCompComponent },
  { path: "timeout", component: TimeExceededCompComponent },
  { path: "endgame", component: CompetitionOverCompComponent },
  { path: "redirect", component: AnswerStatusDisplayCompComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizModuleRoutingModule {}
