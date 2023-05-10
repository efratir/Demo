import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
//import 'rxjs/add/operator/map';

import { BaseHttpService, BaseApiService } from "../shared";
import { ActivatedRoute, Router } from "@angular/router";

import { UserDto } from "../models/dto/UserDto"
import { Password } from 'primeng/primeng';

@Injectable()
export class user extends BaseApiService {
  public userName:string;
  public currentUser:UserDto;
      us : UserDto;
    constructor(private router: Router, private baseHttpService: BaseHttpService) {
        super('User');
    
      }
    setCurrentUser(user:UserDto){
        this.currentUser = user;
    }
    saveUser(user1:UserDto) : Observable<UserDto>
    {
      let url = this.actionUrl('POST');
    
        return this.baseHttpService.post<UserDto>(url,user1);
    }  
    isExist(id:string)
  { 
    let url = this.actionUrl('isExist');
    return this.baseHttpService.get<UserDto>(url,id);
  }
}