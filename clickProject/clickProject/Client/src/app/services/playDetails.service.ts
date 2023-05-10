import { Injectable } from '@angular/core';
import { BaseApiService, BaseHttpService } from '../shared';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PlayDto } from '../models';
import { PLATFORM_BROWSER_ID } from '@angular/common/src/platform_id';
import {myTime} from '../play-details/play-details.component';


@Injectable()
export class playDetails extends BaseApiService {
  
 
  public currentPlay:PlayDto;
 saveHalfDetailse:PlayDto=new PlayDto();
  QuestionnairName:string;
    constructor(private router: Router,private baseHttpService: BaseHttpService) {
      super('Play');
      console.log("Play ctor");
      
     }
    //  setquestionnaireCode(currentQC: number): void {
    //  this.saveHalfDetailse.questionnaireCode=currentQC;
    // }
    whatId(p:string):Observable<string>
    {
      
      let url=this.actionUrl('whatId');
      let params: URLSearchParams = new URLSearchParams();
      params.set('p',p);
      return this.baseHttpService.get<string>(url,params);
    }
     setCurrentPlay(play:PlayDto){
      this.currentPlay = play;
     }
     
      savePlay(play1:PlayDto):Observable<PlayDto>
     {
       let url = this.actionUrl('Add');
         return this.baseHttpService.post<PlayDto>(url,play1);
     }
     deleteMyPlay(playCode:Number)
     {
      let url = this.actionUrl('Remove');
      return this.baseHttpService.post<Number>(url,playCode);
     }
     putPlay(play1:PlayDto):Observable<PlayDto>
     {
       let url = this.actionUrl('PUT');
       
      return this.baseHttpService.put<PlayDto>(url,play1);
     }
     GetQuestionnaireCodeByName(QuestionnairName:string):Observable<Number>
     {
      let url = this.actionUrl('GetQuestionnaireCodeByName');
       console.log(url);
      var e= this.baseHttpService.get<Number>(url,QuestionnairName);
 
      return e;
    }
     GetQuestionnaireNameByCode(QuestionnairCode:Number):Observable<string>
    {
      let url = this.actionUrl('GetQuestionnaireNameByCode');
       console.log(url);
     
       var q = this.baseHttpService.get<string>(url,QuestionnairCode);
      
     return q;
     
   }
   getHalfDetailse(HalfDetailse:PlayDto)
   {
     this.saveHalfDetailse=HalfDetailse;
   }
    }
    // 'http://localhost:52718/api/Play/GetQuestionnaireCodeByName/?QuestionnaireName='