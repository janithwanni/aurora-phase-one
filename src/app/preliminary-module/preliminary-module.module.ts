import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PreliminaryModuleRoutingModule } from "./preliminary-module-routing.module";
import { LoginDialogCompComponent } from "./login-dialog-comp/login-dialog-comp.component";
import { RulesRegulationCompComponent } from "./rules-regulation-comp/rules-regulation-comp.component";

/*login imports*/
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/*material imports*/
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
/*firebase imports*/
import { AngularFireAuth } from "angularfire2/auth";

@NgModule({
  imports: [
    CommonModule,

    ReactiveFormsModule,
    FormsModule,

    /*material imports */
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    PreliminaryModuleRoutingModule
  ],
  providers: [AngularFireAuth],
  declarations: [LoginDialogCompComponent, RulesRegulationCompComponent]
})
export class PreliminaryModuleModule {}
