import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth/auth";
import { auth } from "firebase";
import { MatSnackBar } from "@angular/material";
import { TeamInfo } from "../../../models/team-info";
import { AngularFireDatabase } from "angularfire2/database";
import { TeamProgress } from "../../../models/team-progress";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class AuthenticatorService {
  constructor(
    private matsnackbar: MatSnackBar,
    public firebaseAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {} //public firebaseAuth: FirebaseAuth) { }

  signInTeamWithEmailPassword(email: string, password: string) {
    console.log(email, password);
    this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
        this.matsnackbar.open(error, "Dismiss");
      })
      .then(data => {
        console.log(data);
        let teamID: string = email.split("@")[0].split("_")[1];
        if (+teamID < 10) {
          teamID = "0" + teamID;
        }
        localStorage.setItem("teamID", teamID);
        TeamInfo.setTeamID(teamID);
        this.db
          .object("/team-" + teamID + "/school")
          .valueChanges()
          .subscribe(data => {
            localStorage.setItem("teamName", data + "");
            TeamInfo.setTeamName(data + "");
          });
        //TODO: ADD LOGIC TO RESUME TEAM COMPETITON WHEN INTERNET IS DOWN
        this.db
          .object("/teamCurrentQuestion/team-" + teamID + "/question-id")
          .valueChanges()
          .subscribe(data => {
            console.log(data);
            if (data == "" || data == null) {
              //FRESH TEAM
              console.log("FRESH TEAM");
              let teamProgress: TeamProgress = {
                teamid: "team-" + teamID,
                currentScore: 0,
                currentRing: 4,
                currentTime: 0,
                timeLeft: 3600,
                totalDistance: 0,
                totalScore: 0,
                currentNode: 1
              };
              this.db.list("/teamProgress/team-" + teamID).push(teamProgress);
              this.db
                .object(
                  "/leaderboardRow/leaderboard-row-" +
                    email.split("@")[0].split("_")[1]
                )
                .update({ active: true });
              this.router.navigateByUrl("prelim/rules");
            } else {
              console.log("NOT FRESH TEAM" + data);
              //NOT FRESH TEAM
              this.router.navigateByUrl("quiz");
            }
          });
        this.matsnackbar.open("Signing in to the system", "Dismiss");
      });
  }
}
