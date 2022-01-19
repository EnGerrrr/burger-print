import { UserSignUpRequest } from '../model/Request/UserSignupRequest';
import { UserLoginRequest } from '@/model/Request/UserLoginRequest';
import { UserLoginResponse } from '@/model/Response/UserloginRespone';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { datalogin, User, usersignup, userupdatepassword } from './user';
import { identifierModuleUrl } from '@angular/compiler';
import { userlogin } from './user';
import { Data } from '@angular/router';
import { UserSignUpResponse } from '@/model/Response/UserSignupResponse';

import { JwtHelperService } from '@auth0/angular-jwt';
import { UserResponse } from '@/model/Response/UserResponse';
import { Userupdaterequest } from '@/model/userupdaterequest';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  USER!: User;
  Userlogin!: userlogin;
  Datalogin!: datalogin;
  Usersignup!: usersignup;
  usertoken = {
    id: '',
  };
  iduser!:string;
 

  updateUserProfile = new BehaviorSubject<boolean>(false);
  currentUserProfile = this.updateUserProfile.asObservable();

  constructor(private http: HttpClient,private helper:JwtHelperService) {
  // this.getUserLocalStorage()
  }

  // getUserLocalStorage(){
  //   let token = localStorage.getItem('id');
  //   if (token != null) {
  //     const decodedtoken = this.helper.decodeToken(token);
  //     this.iduser=decodedtoken.id;
  //   }
  // }

  getlocalpublicname() {}
  changeUserProfile(ischange: boolean) {
    this.updateUserProfile.next(ischange);
  }
  getuserbyid(id: string): Observable<UserResponse> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${localStorage.getItem('accesstoken')}`)
    }
    let response = this.http.get<UserResponse>(
      '' + id,
      header
    );
    return response;
  }
  postuserlogin(Userlogin:UserLoginRequest): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(
      'http://159.65.140.140:8085/tts/api/login',
      Userlogin
    );
  }
 

  potusersignup(request: UserSignUpRequest): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(
      'http://159.65.140.140:8085/tts/api/register',
      request
    );
  }

  updateuser(id: string, user: Userupdaterequest) {
    // var header = {
    //   headers: new HttpHeaders()
    //     .set('Authorization',  `Bearer ${localStorage.getItem('accesstoken')}`)
    // }
    // return this.http.put<User>(
    //   'http://id.fetch-api.review-map.com/private-api/User/UpdateUserProfile/' + id,
    //   user,
    //   header
    // );
  }

 
}
