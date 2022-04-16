import { Injectable } from '@angular/core';
import {User} from "./models/User";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {signinRequest} from "./models/signinRequest";
import {signupRequest} from "./models/signupRequest";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user:signinRequest):Observable<any>{
    return this._http.post<any>("http://localhost:8081/api/signin",user)


  }
  public signup(user:signupRequest):Observable<any>{
    return this._http.post<any>("http://localhost:8081/api/signup",user)


  }

}
