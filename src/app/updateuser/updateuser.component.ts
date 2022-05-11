import { Component, OnInit } from '@angular/core';
import { User } from 'app/modals/User';

@Component({
  selector: 'updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  user: User= new User();
  constructor() { }

  ngOnInit(): void {
  }

}
