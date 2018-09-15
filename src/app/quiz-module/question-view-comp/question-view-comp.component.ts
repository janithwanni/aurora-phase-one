import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Question } from "../../models/question";
import { Observable, of, interval } from "rxjs";
import { flatMap, min } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-question-view-comp",
  templateUrl: "./question-view-comp.component.html",
  styleUrls: ["./question-view-comp.component.scss"]
})
export class QuestionViewCompComponent implements OnInit {
  constructor(private db: AngularFireDatabase, private router: Router) {}

  question: Observable<Question>;
  answerList: string[] = ["", "", "", ""];
  countdownSeconds: Observable<string>;
  countdownMinutes: Observable<string>;
  checkAnswer(): void {
    this.question.subscribe(data => {
      data.answerGiven = true;
    });
  }

  ngOnInit() {
    if (localStorage.getItem("teamID") == null) {
      //TEAM HAS NOT SIGNED IN YET
      console.log("NULL");
      this.router.navigateByUrl("");
    } else {
      let teamID = localStorage.getItem("teamID");
      this.question = this.db
        .object<Question>("/teamCurrentQuestion/team-" + teamID)
        .valueChanges()
        .pipe(
          flatMap(data => {
            console.log(data);
            this.answerList[0] = data.answerOne;
            this.answerList[1] = data.answerTwo;
            this.answerList[2] = data.answerThree;
            this.answerList[3] = data.answerFour;
            return of(data);
          })
        );
      this.db
        .object<boolean>("/general/competitionEnd")
        .valueChanges()
        .subscribe(value => {
          if (value == true) {
            //competitonHasEnded
            this.router.navigateByUrl("overview");
          }
        });
      let source = interval(1000);
      let initialMinutes = 5;
      let initialSeconds = 0;
      this.countdownSeconds = source.pipe(
        flatMap(time => {
          let seconds = (60 * initialMinutes + initialSeconds - time) % 60;
          let minutes = Math.floor(
            (60 * initialMinutes + initialSeconds - time) / 60
          );
          this.countdownMinutes =
            minutes == 0 ? of(minutes + "0") : of(minutes + "");
          if (seconds == 0) {
            return of(seconds + "0");
          } else {
            return of(seconds + "");
          }
        })
      );
    }
  }
}
