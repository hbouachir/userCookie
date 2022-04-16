import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RegistrationService} from "../registration.service";
import {signupRequest} from "../models/signupRequest";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user : signupRequest = new signupRequest();
  constructor(private us:RegistrationService, private _router:Router) { }

  ngOnInit(): void {
   // this.us.signup(this.user).subscribe(
     /// ()=>this._router.navigateByUrl("")
   // )
  }


}
