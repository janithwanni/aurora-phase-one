import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable, of } from "rxjs";
import { map, flatMap, takeLast } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-rules-regulation-comp",
  templateUrl: "./rules-regulation-comp.component.html",
  styleUrls: ["./rules-regulation-comp.component.scss"]
})
export class RulesRegulationCompComponent implements OnInit {
  constructor(private db: AngularFireDatabase, private router: Router) {}
  startNotify: Observable<boolean>;
  ngOnInit() {
    this.startNotify = this.db
      .object("/general/competitionStart")
      .valueChanges()
      .pipe(
        flatMap(data => {
          if (data == true) {
            this.router.navigateByUrl("quiz");
          }
          return of(data == true);
        })
      );
  }
}
