import { Time } from '@angular/common';
import { myTime } from '../../play-details/play-details.component';

export class PlayDto{
    playCode: number;
    questionnaireCode:number;
    dateOfPlay:Date;
    hourOfstartJoiningToPlay:string;
    hourOfstartPlay:string;
    hourOfEndPlay:string;
    userIdCreator:string;
    nameOfPlay:string;
    constructor(){
        this.playCode=0;
        this.questionnaireCode=0;
        
        
        this.dateOfPlay= new Date();
        this.hourOfstartJoiningToPlay="";
        this.hourOfstartPlay="";
        this.hourOfEndPlay="";
        this.userIdCreator="";
        this.nameOfPlay="";
    }
}