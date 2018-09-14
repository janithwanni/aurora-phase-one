import {Component, HostListener, OnInit} from '@angular/core';
import "../../../assets/js/login/login.js";
import "../../../assets/js/material-dashboard98f3.js";
import {UserDto} from "./user-dto";
import {AuthenticatorService} from "../services/authenticator/authenticator.service";
import {AngularFireDatabase} from "angularfire2/database";
import {Router} from "@angular/router";

declare var loadLogin: any;
declare var loadMaterials: any;

@Component({
  selector: 'app-login-dialog-comp',
  templateUrl: './login-dialog-comp.component.html',
  styleUrls: ['./login-dialog-comp.component.css']
})
export class LoginDialogCompComponent implements OnInit {

  @HostListener('window:beforeunload', ['$event'])
  public beforeunloadHandler($event) {
    // this.loginService.loggedOut();
  }

  user: UserDto = new UserDto();
  loggedUser = new UserDto();
  failed: boolean = false;
  passwordVisibility: boolean = false;

  constructor(private loginService: AuthenticatorService, private db: AngularFireDatabase,private router: Router) {
  }

  ngOnInit() {
    loadMaterials();
    loadLogin();
    this.logOut();
  }

  getLogin() {
    this.loginService.getLogin(this.user).subscribe((result) => {
      if (result != null) {
        if (JSON.parse(JSON.stringify(result))['teamPassword'] == this.user.teamPassword) {
          const itemRef = this.db.object('users/' + this.user.teamId + '/');
          itemRef.update({authentication: true});
          sessionStorage.setItem('teamId', this.user.teamId);
          this.router.navigate(['/rules']);
          this.failed = false;
        } else {
          this.failed = true;
        }
      } else {
        this.failed = true;
      }
    });
  }

  logOut() {
    if (sessionStorage.getItem('teamId') != null) {
      this.loginService.loggedOut();
    }
  }

  passwordVisible() {
    if (this.passwordVisibility == false) {
      this.passwordVisibility = true;
    } else {
      this.passwordVisibility = false;
    }
  }
}
