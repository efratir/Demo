import { Injectable } from '@angular/core';
import { BaseApiService, BaseHttpService } from '../shared';
import { Router } from '@angular/router';
import { PlayDto } from '../models/dto/playDto';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class participantDetails extends BaseApiService {

 playName:string;
 

  constructor(private router: Router,private baseHttpService: BaseHttpService) {
    super('Play');
    console.log("PlayService ctor");
   }
   
   getAllPlayHappenNow():Observable<PlayDto[]>{
    let url = this.actionUrl('GetAllPlayHappeningNow');
    console.log(url);
    
    return this.baseHttpService.get<PlayDto[]>(url); 
   } 
   isMatchAge(playCode:string,dateOfBirth:string):Observable<boolean>{
    let url = this.actionUrl('IfAgeMatch');
    let params: URLSearchParams = new URLSearchParams();
    params.set('playCode',playCode);
    params.set('dateOfBirth',dateOfBirth)
    console.log(url);
    
    return this.baseHttpService.get<boolean>(url,params); 
   } 
 }
  
