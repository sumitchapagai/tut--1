import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string="http://localhost:3000/users";

  constructor(private httpClient:HttpClient) { }

  signup(obj:any,img:File ){
    
    
    let formData = new FormData();
    console.log("here fileeeeeeeeeeeee", img);
    formData.append('firstName',obj.firstName);
    formData.append('lastName',obj.lastName);
    formData.append('email',obj.email);
    formData.append('phoneNumber',obj.phoneNumber);
    formData.append('password',obj.password);
    formData.append('role',obj.role);
    formData.append('img',img);

    console.log("here formDataaaaaaaaaaaa",formData);
    return this.httpClient.post<{message:string, user:any}>(this.userURL +"/signup",formData);

    
  }
  login(obj){
    return this.httpClient.post<{message:string, user:any}>(this.userURL +"/login",obj);
  }

  getUserById(id){
    return this.httpClient.get<{user:any}>(`${this.userURL}/profile/${id}`);
  }
  editUser(obj){
    return this.httpClient.put<{message:string}>(`${this.userURL}/editProfile`,obj);
  }
}
