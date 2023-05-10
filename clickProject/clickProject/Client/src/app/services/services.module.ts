import { NgModule } from "@angular/core";
import { /*MAIN_SERVICES,*/ AUTH_SERVICES } from "./Auth";
import { enteranceAll } from './enteranceAll.service';
import { user } from './user.service';
import { participantDetails } from './participantDetails.service';
import { BaseApiService, BaseHttpService } from '../shared';
import { playDetails } from './PlayDetails.service';
import { SaveParticipantDetails } from './saveParticipantDetails.service';
import { subject } from './Subject.service';
import { questionnaire } from './Questionnaire.service';
import { thePlay } from './thePlay.service';
import {winner}from './winner.service'
const SERVICES =[
    //...MAIN_SERVICES,
    ...AUTH_SERVICES
]
@NgModule({
    providers: [...SERVICES,winner,thePlay,user,enteranceAll,SaveParticipantDetails,participantDetails,playDetails,subject,questionnaire,BaseHttpService]
})
export class ServicesModule { }

