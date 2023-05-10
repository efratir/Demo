import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { BaseHttpService, BaseApiService } from "../shared";
import { ActivatedRoute, Router } from "@angular/router";

import { ParticipantDto } from "../models/dto/participantDto"
import { UserDto, PlayDto } from '../models';

@Injectable()
export class SaveParticipantDetails extends BaseApiService {
  currentParticipant:ParticipantDto=new ParticipantDto();
    constructor(private router: Router, private baseHttpService: BaseHttpService) {
        super('Participant');
      }
     
 
  setCurrentParticipant(participant:ParticipantDto){
      this.currentParticipant = participant;
  }
  saveParticipant(participant1:ParticipantDto) : Observable<ParticipantDto>
  {
    let url = this.actionUrl('POST');
    participant1.trueOrFalseAnswer=false;
      return this.baseHttpService.post<ParticipantDto>(url,participant1);
  } 
  
  
  whatCanBegin(id:string): Observable<PlayDto[]>
  { 
    let url = this.actionUrl('GetWhatCanBegin');
    
   
    return this.baseHttpService.get<PlayDto[]>(url,id);
  }

}