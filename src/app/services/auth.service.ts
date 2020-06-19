import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../models/app-user';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(
    private userService: UserService,
    private angularFireAuth: AngularFireAuth,
    private route: ActivatedRoute
  ) {
    this.user$ = this.angularFireAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    if (returnUrl) {
      localStorage.setItem('returnUrl', returnUrl);
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    this.angularFireAuth.signInWithRedirect(provider);
  }

  logout() {
    this.angularFireAuth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.switchMap((user) => {
      if (user) {
        return this.userService.get(user.uid);
      }
      return Observable.of(null);
    });
  }
}
