import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable, of, interval } from "rxjs";
import { flatMap } from "rxjs/operators";

@Component({
  selector: "app-timer-view-comp",
  templateUrl: "./timer-view-comp.component.html",
  styleUrls: ["./timer-view-comp.component.scss"]
})
export class TimerViewCompComponent implements OnInit {
  constructor(private db: AngularFireDatabase) {}

  countdownSeconds: Observable<string>;
  countdownMinutes: Observable<string>;
  initialMinutes: number;
  initialSeconds: number;
  ngOnInit() {
    let source = interval(1000);
    console.log("IN NG ONINIT");
    this.db
      .object<any>("/general")
      .valueChanges()
      .subscribe(general => {
        let time: string = general.setTime;
        if (general.competitionStart == true) {
          console.log("DB TIME" + time);
          this.initialMinutes = +time.split(":")[0];
          this.initialSeconds = +time.split(":")[1];
          this.countdownSeconds = source.pipe(
            flatMap(tick => {
              console.log("TIMER TICK" + tick);
              let seconds =
                (60 * this.initialMinutes + this.initialSeconds - tick) % 60;
              let minutes = Math.floor(
                (60 * this.initialMinutes + this.initialSeconds - tick) / 60
              );
              console.log("SECONDS" + seconds);
              console.log("MINUTES", minutes);
              this.countdownMinutes =
                minutes == 0 ? of(minutes + "0") : of(minutes + "");
              if (minutes == 0 && seconds == 0) {
                this.db.object("/general/competitionEnd").update(true);
                this.db.object("/general/competitionStart").update(false);
              }
              if (seconds <= 10) {
                return of("0" + seconds);
              } else {
                return of(seconds + "");
              }
            })
          );
        }
      });
  }
}
