import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Question } from "../../models/question";
import { Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";

@Component({
  selector: "app-question-view-comp",
  templateUrl: "./question-view-comp.component.html",
  styleUrls: ["./question-view-comp.component.scss"]
})
export class QuestionViewCompComponent implements OnInit {
  constructor(private db: AngularFireDatabase) {}

  question: Observable<Question>;
  answerList: string[] = ["", "", "", ""];
  ngOnInit() {
    if (localStorage.getItem("teamID") == null) {
      //TEAM HAS NOT SIGNED IN YET
      console.log("NULL");
    } else {
      let teamID = localStorage.getItem("teamID");
      this.question = this.db
        .object("/teamCurrentQuestion/team-" + teamID)
        .valueChanges()
        .pipe(
          flatMap(data => {
            console.log(data);
            let dbQuestion: Question = {
              questionID: "",
              answerFour: "",
              answerThree: "",
              answerTwo: "",
              answerOne: "",
              answerGiven: false,
              competitionOver: false,
              correctAnswerID: "",
              correctAnswerText: "",
              questionText: "",
              timeExceeded: false
            };
            dbQuestion.questionID = data["question-id"];
            dbQuestion.questionText = data["question-text"];
            dbQuestion.answerOne = data["answer-1"];
            dbQuestion.answerTwo = data["answer-2"];
            dbQuestion.answerThree = data["answer-3"];
            dbQuestion.answerFour = data["answer-4"];
            dbQuestion.answerGiven = data["answer-given"];
            dbQuestion.competitionOver = data["competition-over"];
            dbQuestion.correctAnswerID = data["correct-answer-id"];
            dbQuestion.correctAnswerText = data["correct-answer"];
            dbQuestion.timeExceeded = data["time-exceeded"];
            this.answerList[0] = dbQuestion.answerOne;
            this.answerList[1] = dbQuestion.answerTwo;
            this.answerList[2] = dbQuestion.answerThree;
            this.answerList[3] = dbQuestion.answerFour;

            return of(dbQuestion);
          })
        );
    }
  }
}
