import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any={};
userForm:FormGroup;
errorMsg:string;
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit() {
  }
  login(){
    console.log("here user object",this.user);
    this.userService.login(this.user).subscribe(
      (data)=>{
        console.log("here data after login", data);
        if (data.message=="2") {
          localStorage.setItem('connectedUser',data.user.id)
          if (data.user.role=='client') {
            this.router.navigate([""]);
          }else{
            this.router.navigate(['admin']);
          }
        }else{
          this.errorMsg="Please check Email/pwd";

        }
        
      }
    );
    
  }

}
