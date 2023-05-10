
import { Injectable } from '@angular/core';
import { BaseApiService, BaseHttpService } from '../shared';
import { Router } from '@angular/router';
import { PlayDto } from '../models/dto/playDto';
import { Observable } from 'rxjs/Observable';

import { QuestionDto } from '../models';



@Injectable()
export class question extends BaseApiService {

  public subjectCode:string;
  public subjectName:string;
  currentQuestion:QuestionDto;
 

  constructor(private router: Router,private baseHttpService: BaseHttpService) {
    super('Question');
    console.log("question ctor");
   }
   setCurrentQuestion(question:QuestionDto){
    this.currentQuestion = question;
}
   saveQuestion(question1:QuestionDto):Observable<QuestionDto>{
    
    let url = this.actionUrl('Add');
    let params: URLSearchParams = new URLSearchParams();
    return this.baseHttpService.post<QuestionDto>(url,question1);
  }
  deleteMyQuestion(QuestionCode:Number)
  {
     let url = this.actionUrl('Remove');
    
     return this.baseHttpService.post<Number>(url,QuestionCode);
    }
    putQuestion(Question:QuestionDto):Observable<QuestionDto>
     {
       let url = this.actionUrl('Update');
       
      return this.baseHttpService.put<QuestionDto>(url,Question);
     }
  }

 
  