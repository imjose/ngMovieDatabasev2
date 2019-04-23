import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
  ) { }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( credentials => {
        console.log(credentials);
      });
  }

  register(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( credentials => {
        console.log(credentials);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
