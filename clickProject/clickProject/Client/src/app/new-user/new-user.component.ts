import { Component, OnInit } from '@angular/core';
import {UserDto} from '../models/dto/userDto';
import {user} from "../services/user.service";
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  userName:string;
  userPassword:string;
  myNewUser:UserDto =new UserDto();
  user:UserDto =new UserDto();
  constructor(private userService: user) { }

  ngOnInit() {
  }

   saveUser(){
     console.log("before post user");
     this.user.userName=this.userName;
     this.user.password=this.userPassword;
     this.userService.saveUser(this.user).subscribe(
       (data:UserDto)=>{
        this.myNewUser = data;
        this.userService.setCurrentUser(data);
         console.log("after post user");
         alert("המשתמש נוסף");
       }
    )
   }
}

