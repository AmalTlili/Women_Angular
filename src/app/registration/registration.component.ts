import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  registeruser(){
    this._router.navigate(['/user-profile']);
  }

}
