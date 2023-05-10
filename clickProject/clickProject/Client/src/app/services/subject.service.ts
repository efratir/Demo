
import { Injectable } from '@angular/core';
import { BaseApiService, BaseHttpService } from '../shared';
import { Router } from '@angular/router';
import { PlayDto } from '../models/dto/playDto';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SubjectDto } from "../models/dto/subjectdto"



@Injectable()
export class subject extends BaseApiService {

  public subjectCode:string;
  public subjectName:string;
  currentSubject:SubjectDto;
 

  constructor(private router: Router,private baseHttpService: BaseHttpService) {
    super('Subject');
    console.log("SubjectService ctor");
   }
   setCurrentSubject(subject:SubjectDto){
    this.currentSubject = subject;
}
   saveSubject(Subject1:SubjectDto):Observable<SubjectDto>{
    
    let url = this.actionUrl('Post');
    let params: URLSearchParams = new URLSearchParams();
    return this.baseHttpService.post<SubjectDto>(url,Subject1);
  }


  getAllSubject():Observable<SubjectDto[]>{
    let url = this.actionUrl('GetAllSubject');
    console.log(url);

    return this.baseHttpService.get<SubjectDto[]>(url); 
   }  
 }  