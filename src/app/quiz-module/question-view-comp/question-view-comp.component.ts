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
  currentNode: number;
  totalDistance: number;
  totalScore: number;
  correctAnswer: string;
  currentTime: number;
  competitionTimeLeft: number;
  answerScore: number;
  currentQID: string;
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
        console.log(this.correctAnswer, this.userAnswer);
        if (this.userAnswer == this.correctAnswer) {
          progress[0].currentScore = ringMainScores[this.currentRingLevel - 1];
          console.log("score is", progress[0].currentScore);
        } else {
          progress[0].currentScore = ringPenalties[this.currentRingLevel - 1];
          console.log("score is", progress[0].currentScore);
        }
        this.answerScore = progress[0].currentScore;
        progress[0].totalScore += progress[0].currentScore;
        progress[0].currentTime = this.timeLeft;
        progress[0].timeLeft = this.competitionTimeLeft;
        progress[0].currentNode = this.currentNode;
        console.log(progress[0]);
        //write the teamprogress
        this.db.list("/teamProgress/" + progress[0].teamid).push(progress[0]);
        this.db.object("/team/" + progress[0].teamid).update({
          totalDistance: progress[0].totalDistance,
          totalScore: progress[0].totalScore
        });
      });

    this.db
      .object("/teamCurrentQuestion/team-" + teamID)
      .update({ timeLeft: this.timeLeft });
    this.db
      .object("/teamCurrentQuestion/team-" + teamID)
      .update({ answerGiven: true });
  }
  continueQuiz() {
    localStorage.setItem("currentQID", this.currentQID);
    this.router.navigateByUrl("quiz/redirect");
  }

  ngOnInit() {
    if (
      localStorage.getItem("teamID") == null ||
      localStorage.getItem("teamID") == undefined
    ) {
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
            console.log("/teamCurrentQuestion/team-" + teamID);
            console.log(data);
            this.currentRingLevel = data.currentRingLevel;
            this.currentNode = data.currentNodeNumber;
            this.correctAnswer = data.correctAnswerText;
            this.currentQID = data.questionID;
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
            //TODO: mark team progress here
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
