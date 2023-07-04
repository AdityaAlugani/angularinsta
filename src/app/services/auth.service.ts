import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { }

  signUp(username:string,password:string)
  {
    return this.auth.auth.createUserWithEmailAndPassword(username,password);
  }
  signIn(username:string,password:string)
  {
    return this.auth.auth.signInWithEmailAndPassword(username,password);
  }
  getUser()
  {
    return this.auth.authState;
  }
  signOut()
  {
    return this.auth.auth.signOut();
  }
}
