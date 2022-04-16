import { Component, OnInit } from '@angular/core';
import {TokenInterceptorService} from "../token-interceptor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {


  constructor(private ts:TokenInterceptorService, private _router:Router) { }

  logout(){
   // sessionStorage.removeItem("token");
    this._router.navigate(['/']);
  }
  ngOnInit(): void {
  }

}
