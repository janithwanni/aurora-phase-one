import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-overview-comp",
  templateUrl: "./overview-comp.component.html",
  styleUrls: ["./overview-comp.component.scss"]
})
export class OverviewCompComponent implements OnInit {
  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {}

  competitionStart: boolean = false;
  startCompetition() {
    console.log("BUTTON FIRED");
    this.db
      .object("/general")
      .update({ competitionStart: true, competitionOngoing: true });
    this.competitionStart = true;
  }
}
