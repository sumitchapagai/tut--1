import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:any={};
profileForm:FormGroup;
id:any;
errorMsg:string;
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.id=localStorage.getItem('connectedUser');
    console.log("here connected user id", this.id);
    // call user service
    this.userService.getUserById(this.id).subscribe(
      (data)=>{
        this.user=data.user;

      }
    );
    
  }
  edit(){
   
    // call service  to edit user profile
    this.userService.editUser(this.user).subscribe(
      (data)=>{
        console.log("here msg from be",data.message);
        this.router.navigate(['']);


      }
    );
  }

}
