import { Component, OnInit } from '@angular/core';
import { SocialUser, SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
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
  public userDetails;

  constructor(private authService:SocialAuthService,private router: Router) { }

  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth');

    if (storage) {
      this.userDetails = JSON.parse(storage);
    } else {
      this.signOut();
    }
  }
SignwithGoogle():any{
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
}
signOut(): void {
  localStorage.removeItem('google_auth');
  this.router.navigateByUrl('/login').then();
}
}
