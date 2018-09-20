import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Router } from "@angular/router";

@Component({
  selector: "app-answer-status-display-comp",
  templateUrl: "./answer-status-display-comp.component.html",
  styleUrls: ["./answer-status-display-comp.component.scss"]
})
export class AnswerStatusDisplayCompComponent implements OnInit {
  constructor(private db: AngularFireDatabase, private router: Router) {}

  ngOnInit() {
    console.log(
      "teamCurrentQuestion/team-" +
        localStorage.getItem("teamID") +
        "/questionID"
    );
    this.db
      .object(
        "teamCurrentQuestion/team-" +
          localStorage.getItem("teamID") +
          "/questionID"
      )
      .valueChanges()
      .subscribe(data => {
        console.log(data);
        if (data != null) {
          if (data != localStorage.getItem("currentQID")) {
            this.router.navigateByUrl("quiz");
          }
        }
      });
  }
}
