
//import 'rxjs/add/operator/map';

//import {BaseHttpService } from "../../shared/services"
import { Injectable } from '@angular/core';
import { BaseApiService, BaseHttpService } from '../shared';
import { Router } from '@angular/router';
import { PlayDto } from '../models/dto/playDto';
import { Observable } from 'rxjs/Observable';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Response } from '@angular/http';


@Injectable()
export class enteranceAll extends BaseApiService {

 playName:string;
 x:Response;

  constructor(private router: Router,private baseHttpService: BaseHttpService ) {
    super('Play');
    console.log("PlayService ctor");
   }
   
   getAllPlay():Observable<PlayDto[]>{
    let url = this.actionUrl('GetAll');
    console.log(url);

    return this.baseHttpService.get<PlayDto[]>(url); 
   }  


 }