import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Observable, of } from "rxjs";
@Component({
  selector: "app-login-dialog-comp",
  templateUrl: "./login-dialog-comp.component.html",
  styleUrls: ["./login-dialog-comp.component.scss"]
})

//class used to define the errors from mistyped email addresses
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

export class LoginDialogCompComponent implements OnInit {
  emailFormControl;
  matcher;
  constructor() {
    //email form control
    this.emailFormControl = new FormControl("", [
      Validators.required,
      Validators.email
    ]);

    //finding error state of email
    this.matcher = new MyErrorStateMatcher();
  }

  ngOnInit() {}
}
