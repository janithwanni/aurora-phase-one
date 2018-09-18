import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Question } from "../../models/question";
import { Observable, of, interval } from "rxjs";
import { flatMap, min } from "rxjs/operators";
import { Router } from "@angular/router";
import { TeamProgress } from "../../models/team-progress";

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
  userAnswer: string;
  timeLeft: number;

  currentRingLevel: number;
  totalDistance: number;
  totalScore: number;
  correctAnswer: string;
  currentTime: number;
  competitionTimeLeft: number;

  checkAnswer(): void {
    let teamID = localStorage.getItem("teamID");
    const ringMainScores = { 4: 1, 3: 3, 2: 6, 1: 10 };
    const ringPenalties = { 4: 0.5, 3: 1, 2: 4, 1: 9 };
    const ringTimes = { 4: 120, 3: 105, 2: 90, 1: 60 };

    //variables that the AI needs
    /*
    let totalScore: number; 
    let score: number = 0; 
    let time: number; 
    let timeLeft: number; 
    let ringLevel: number;
    let totalDistance: number;
    let timeExceeded: number = 1;
    */
    this.db
      .list<TeamProgress>("/teamProgress/team-" + teamID, ref =>
        ref.orderByKey().limitToFirst(1)
      )
      .valueChanges()
      .subscribe(progress => {
        console.log(progress);
        progress[0].currentRing = this.currentRingLevel;
        progress[0].totalDistance += 1;
        if (this.userAnswer == this.correctAnswer) {
          progress[0].currentScore = ringMainScores[this.currentRingLevel - 1];
        } else {
          progress[0].currentScore = ringPenalties[this.currentRingLevel - 1];
        }
        progress[0].totalScore += progress[0].currentScore;
        progress[0].currentTime = this.timeLeft;

        console.log(progress[0]);
        /* this.question.subscribe(questionData => {
          console.log(questionData);
          progress[0].currentRing = questionData.currentRingLevel;
          progress[0].totalDistance += 1;
          if (this.userAnswer == questionData.correctAnswerText) {
            progress[0].currentScore =
              ringMainScores[questionData.currentRingLevel - 1];
          } else {
            progress[0].currentScore =
              ringPenalties[questionData.currentRingLevel - 1];
          }
          progress[0].totalScore += progress[0].currentScore;

          progress[0].currentTime = this.timeLeft;
          console.log("time left is ", this.timeLeft);
          console.log(progress[0]);
          this.db.object("/teamProgress/team-" + teamID).set(progress[0]);
        }); */
      });
    /*  let teamProgress: TeamProgress = {
      teamid: "team-" + teamID,
      currentScore: 0,
      currentRing: 0,
      currentTime: 0,
      timeLeft: 0,
      totalDistance: 0,
      totalScore: 0
    }; */
    /* this.db
      .object("/teamCurrentQuestion/team-" + localStorage.getItem("teamID"))
      .update({ timeLeft: this.timeLeft });
    this.db
      .object("/teamCurrentQuestion/team-" + localStorage.getItem("teamID"))
      .update({ answerGiven: true }); */
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
            this.currentRingLevel = data.currentRingLevel;
            this.correctAnswer = data.correctAnswerText;

            this.answerList[0] = data.answerOne;
            this.answerList[1] = data.answerTwo;
            this.answerList[2] = data.answerThree;
            this.answerList[3] = data.answerFour;
            return of(data);
          })
        );
      this.db
        .object("/general/timeLeft")
        .valueChanges()
        .subscribe(data => {
          this.competitionTimeLeft = +data;
        });
      this.db
        .object<boolean>("/general/competitionEnd")
        .valueChanges()
        .subscribe(value => {
          if (value == true) {
            //competitonHasEnded
            this.router.navigateByUrl("/quiz/endgame");
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
          this.timeLeft = 60 * initialMinutes + initialSeconds - time;
          this.countdownMinutes =
            minutes == 0 ? of(minutes + "0") : of(minutes + "");
          if (minutes == 0 && seconds == 0) {
            //time exceeded
            this.db
              .object("/teamCurrentQuestion/team-" + teamID)
              .update({ timeExceeded: true });
            this.router.navigateByUrl("/quiz/timeout");
          }
          if (seconds <= 10) {
            return of("0" + seconds);
          } else {
            return of(seconds + "");
          }
        })
      );
    }
  }
}
