import { HttpErrorResponse, HttpHeaderResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { FacebookLoginProvider } from 'angularx-social-login';
import { User } from 'app/modals/User';
import { RegistrationService } from 'app/registration.service';
import { AuthService } from 'app/services/auth.service';
import { response } from 'express';
import { map } from 'rxjs/operators';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User();
  msg='';
  constructor(private _service:RegistrationService,private _router:Router,private authservice:AuthService,private router: Router,private authService: SocialAuthService) { }

  ngOnInit(): void {
  
  }
  loginuser(){
    this._service.loginUserFromRemote(this.user).subscribe(
    {
    next: data=>{
      console.log("response received");
    this._router.navigate(['/userlist'])
    },
    error:error=>{
      console.log(error);
      this.msg="Bad credentials,Please enter valid username and password"
    }
    })
      }
  gotoregistration(){
    this._router.navigate(['/registration']);

  }
 

}
