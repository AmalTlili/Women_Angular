import { Component, OnInit } from '@angular/core';
import { SocialUser, SocialAuthService } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

@Component({
  selector: 'google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {
  user!:SocialUser;

  constructor(private authService:SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user=user;
    })
  }
SignwithGoogle():any{
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
}
Signout():any{
  this.authService.signOut();
}
}
