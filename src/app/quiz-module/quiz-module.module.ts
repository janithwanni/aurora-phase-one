import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizModuleRoutingModule } from './quiz-module-routing.module';
import { QuestionViewCompComponent } from './question-view-comp/question-view-comp.component';
import { AnswerStatusDisplayCompComponent } from './answer-status-display-comp/answer-status-display-comp.component';
import { CompetitionOverCompComponent } from './competition-over-comp/competition-over-comp.component';
import { TimeExceededCompComponent } from './time-exceeded-comp/time-exceeded-comp.component';

@NgModule({
  imports: [
    CommonModule,
    QuizModuleRoutingModule
  ],
  declarations: [QuestionViewCompComponent, AnswerStatusDisplayCompComponent, CompetitionOverCompComponent, TimeExceededCompComponent]
})
export class QuizModuleModule { }
