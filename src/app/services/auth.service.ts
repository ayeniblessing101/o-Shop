import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user$: Observable<firebase.User>;
    constructor(private angularFireAuth: AngularFireAuth) {
        this.user$ = this.angularFireAuth.authState;
     }

    doGoogleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        this.angularFireAuth.signInWithRedirect(provider);
    }

    isLoggedIn() {
        return this.user$;
    }

    doLogout() {
        this.angularFireAuth.signOut();
    }
}
