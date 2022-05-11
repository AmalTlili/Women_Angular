import { Component, OnInit } from '@angular/core';
import { User } from 'app/modals/User';
import { UserService } from 'app/user.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  
user : User[];
list:User[];
filtered_list:User[];
username: any;
  constructor(private us:UserService,private modalService: NgbModal , private http :HttpClient,private router: Router) { }
  totalLength:any;
  closeResult! : string;

  ngOnInit(): void {
    this.getUserList();
  }
  getUserList(){
    this.us.getUserList().subscribe(res=>{
    this.list=res;
    this.filtered_list = this.list;
    console.log(res);
    this.totalLength = res.length;
    });
  }
  adduser(user){
    console.log( user);
    
   this.us.adduser(user).subscribe(data=>{
     console.log("result is " + data);
     
     this.getUserList();
   });
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
    this.adduser(f.value);
    this.modalService.dismissAll();
    this.getUserList();
  }
  Search(){
    if(this.username ==""){
      this.ngOnInit();
    }else{
      this.user=this.user.filter(res=>{
        res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      })
    }
    console.log(this.user);
  }
  deleteuser(id: number){
    this.us.deleteuser(id).subscribe( data => {
      console.log(data);
      this.getUserList;
    })
}
updateuser(iduser:number){
  this.router.navigate(['update-user',iduser])
}
}
