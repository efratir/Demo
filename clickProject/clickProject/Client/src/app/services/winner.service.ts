import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { BaseHttpService, BaseApiService } from "../shared";
import { ActivatedRoute, Router } from "@angular/router";

import { UserDto } from "../models/dto/UserDto"
import { Password } from 'primeng/primeng';

@Injectable()
export class winner extends BaseApiService {

 
    constructor(private router: Router, private baseHttpService: BaseHttpService) {
        super('Participant');
    
      }
      WinnerForQuestoins(playCode:number)
      { 
        let url = this.actionUrl('WinnerForQuestoins');
        return this.baseHttpService.get<Map<number, Map<string,string>>>(url,playCode);
      }
      EndWinner ()
      { 
        
        let url = this.actionUrl('EndWinner');
        return this.baseHttpService.get<string[]>(url);
     
      }
    }

