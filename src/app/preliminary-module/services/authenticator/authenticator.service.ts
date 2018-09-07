import { Injectable } from '@angular/core';
import { FirebaseAuth } from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  constructor(public firebaseAuth: FirebaseAuth) { }

  signInTeamWithEmailPassword(email:string,password:string){
    this.firebaseAuth.signInWithEmailAndPassword(email,password).catch((error)=>{}).then((data)=>{})
  }
}
