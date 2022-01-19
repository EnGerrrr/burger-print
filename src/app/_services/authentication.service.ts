import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@/_models';

const AUTH_API = 'http://159.65.140.140:8085/tts/api/';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    createSession(account) {
      return this.http.post<any>(AUTH_API + 'login', account)
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              console.log(user)
              const currentUser = user;
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(currentUser);
              return currentUser;
              console.log(currentUser)
          }));
  }



    // createSession(email: string, password: string) {
    //     return this.http.post<any>(AUTH_API + 'login',{ email:email, password:password })
    //     .pipe(map(user => {
    //       // login successful if there's a jwt token in the response
    //       const currentUser = user.token;
    //       if (user && currentUser) {
    //           // store user details and jwt token in local storage to keep user logged in between page refreshes
    //           localStorage.setItem('currentUser', JSON.stringify(user));
    //       }

    //       return user;
    //   }));
    // }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');

        this.currentUserSubject.next(null);
    }
}
