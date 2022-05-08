import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { User } from 'app/modals/User';
import { RegistrationService } from 'app/registration.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User();
  msg='';
  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }
  loginuser(){
this._service.loginUserFromRemote(this.user).subscribe(
{
next: data=>{
  console.log("response received");
this._router.navigate(['/user'])
},
error:error=>{
  console.log("exception occured");
  this.msg="Bad credentials,Please enter valid username and password"
}
})
  }
  gotoregistration(){
    this._router.navigate(['/registration']);

  }

}
