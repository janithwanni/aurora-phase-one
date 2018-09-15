import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { QuizModuleRoutingModule } from "./quiz-module-routing.module";
import { QuestionViewCompComponent } from "./question-view-comp/question-view-comp.component";
import { AnswerStatusDisplayCompComponent } from "./answer-status-display-comp/answer-status-display-comp.component";
import { CompetitionOverCompComponent } from "./competition-over-comp/competition-over-comp.component";
import { TimeExceededCompComponent } from "./time-exceeded-comp/time-exceeded-comp.component";
import { MatButtonModule } from "@angular/material";
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    QuizModuleRoutingModule
  ],
  declarations: [
    QuestionViewCompComponent,
    AnswerStatusDisplayCompComponent,
    CompetitionOverCompComponent,
    TimeExceededCompComponent
  ]
})
export class QuizModuleModule {}
