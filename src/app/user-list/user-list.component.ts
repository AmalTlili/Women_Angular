import { Component, OnInit } from '@angular/core';
import { User } from 'app/modals/User';
import { UserService } from 'app/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
user?: User[];
  constructor(private userserv:UserService) { }

  ngOnInit(): void {
    this.getuserbyyears();
  }
  getuserbyyears(){
    this.userserv.getuserbyyear().subscribe(data=>{
     this.user=data;
    });
  }

}
