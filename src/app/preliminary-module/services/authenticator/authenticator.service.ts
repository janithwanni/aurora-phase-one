import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth/auth";
import { auth } from "firebase";
import { MatSnackBar } from "@angular/material";
import { TeamInfo } from "../../../models/team-info";
import { AngularFireDatabase } from "angularfire2/database";
@Injectable({
  providedIn: "root"
})
export class AuthenticatorService {
  constructor(
    private matsnackbar: MatSnackBar,
    public firebaseAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {} //public firebaseAuth: FirebaseAuth) { }

  signInTeamWithEmailPassword(email: string, password: string) {
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

        this.matsnackbar.open("Signing in to the system", "Dismiss");
      });
  }
}
