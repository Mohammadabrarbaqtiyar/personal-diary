import { Injectable } from '@angular/core';
import { from} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFs: AngularFireAuth) {}

  public signInWithGoogle() {
    return from(this.angularFs.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
  }

  public signOut() {
    return from(this.angularFs.signOut());
  }

}
