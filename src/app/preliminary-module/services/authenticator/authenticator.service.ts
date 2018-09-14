import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireObject} from 'angularfire2/database';
import {UserDto} from "../../login-dialog-comp/user-dto";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  loggedUser: Observable<any>;
  user: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
  }

  getLogin(user: UserDto):Observable<any> {
    return this.db.object('users/' + user.teamId + '/').valueChanges();
  }

  loggedOut() {
    const itemRef = this.db.object('users/' + sessionStorage.getItem('teamId') + '/');
    itemRef.update({authentication: false});
  }
}
