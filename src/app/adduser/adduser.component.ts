import { Component, OnInit } from '@angular/core';
import { User } from 'app/modals/User';
import { UserService } from 'app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 user: User= new User();
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.userService.adduser(this.user).subscribe( data =>{
      console.log(data);
      this.goTouserList();
    },
    error => console.log(error));
  }
  goTouserList(){
    this.router.navigate(['/userlist']);
  }
  onSubmit(){
    console.log(this.user);
    this.saveEmployee();
  }

}
