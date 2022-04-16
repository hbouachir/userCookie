import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User } from '../models/User';
import {RegistrationService} from "../registration.service";
import {signinRequest} from "../models/signinRequest";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user =new signinRequest();
   msg="";
  constructor(private _service:RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log(data);
        document.cookie='token='+data.accessToken;

        sessionStorage.setItem('token',data.accessToken);
        this._router.navigate((['/loginsuccess']))
        },
      error =>{
        console.log("exception occured");
        this.msg="Bad Credentials"
      }
    );

  }

  gotoregistration() {
    this._router.navigate((['/registration']))

  }
}
