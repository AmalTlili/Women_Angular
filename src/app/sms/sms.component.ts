import { Component, OnInit } from '@angular/core';
import { Smsrequest } from 'app/modals/smsrequest';
import { UserService } from 'app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SMSComponent implements OnInit {

  sms: Smsrequest= new Smsrequest();
  constructor(private userservice:UserService,private router: Router) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.userservice.smsuser(this.sms).subscribe( data =>{
      console.log(data);
      this.goTouserList();
    },
    error => console.log(error));
  }
  goTouserList(){
    this.router.navigate(['/userlist']);
  }
  onSubmit(){
    console.log(this.sms);
    this.saveEmployee();
  }

}
