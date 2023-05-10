import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { enteranceAll } from '../services/enteranceAll.service';
import { PlayDto } from '../models/dto/playDto';
import { playDetails } from '../services/PlayDetails.service';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-enterance-all',
  templateUrl: './enterance-all.component.html',
  styleUrls: ['./enterance-all.component.css']
})
export class EnteranceAllComponent implements OnInit {
 
  plays:PlayDto[]=[];


   pipe = new DatePipe('en');

  PlayCode: number;
  QuestionnaireCode:number;
  DateOfPlay:Date;
  HourOfstartJoiningToPlay:string;
  HourOfstartPlay:string;
  HourOfEndPlay:string;
  UserPassword:string;
  NameOfPlay:string;
  newPlay:PlayDto=new PlayDto();
  CheckUserPassword:string;
  playCodeToDelete:Number;
  displayDialog: boolean;
  selectedPlay: PlayDto;
  checkSelectedPlay: PlayDto;


  questionnaireName:string;

  isDivVisible:boolean;
  deleteDialoge:boolean;
  
  myFormattedDate:string;


  constructor(private playServ:enteranceAll,private playService:playDetails,private router:Router) {
    console.log("EnteranceAllComponent ctor");
    this.isDivVisible=false;
    this.deleteDialoge=false;
     this.playServ.getAllPlay().subscribe((data:PlayDto[])=>{
       this.plays=data;
       console.log(data);
     },error=>{
       console.log(error);
     }) }

  



   selectPlay(event: Event, play: PlayDto) {
    this.isDivVisible=false;
    this.selectedPlay = play;
    this.displayDialog = true;
     event.preventDefault();
  //  this.playService.GetQuestionnaireNameByCode(this.selectedPlay.questionnaireCode).subscribe((data: string)=>{
      
  //      this.questionnaireName=data;
  //     console.log(this.questionnaireName);
  //    }
  //   )
    
    }
onDialogHide() {
  this.selectedPlay = null;
}

  ngOnInit() {
 
  }

  savePlay(){
    
    console.log("before post participant");
  
    this.newPlay.playCode=null;
    this.newPlay.questionnaireCode=this.QuestionnaireCode;
 
    this.newPlay.dateOfPlay=this.DateOfPlay;
    this.newPlay.hourOfstartJoiningToPlay=this.HourOfstartJoiningToPlay;
    this.newPlay.hourOfstartPlay=this.HourOfstartPlay;
    this.newPlay.hourOfEndPlay=this.HourOfEndPlay;
    this.newPlay.userIdCreator=this.UserPassword;
    this.newPlay.nameOfPlay=this.NameOfPlay;
   
    this.playService.savePlay(this.newPlay).subscribe(
      (data:PlayDto)=>{
       this.newPlay = data;
       this.playService.setCurrentPlay(data);
        console.log("after post play");
        alert("המשחק נוסף");
      }
   )
    }


  deletePlay(play:PlayDto){
   
    var id= prompt("הכנס סיסמא:");
  
   this.playService.whatId(id).subscribe(
     (data:string)=>{
       if(data==play.userIdCreator){
         
        this.playService.deleteMyPlay(play.playCode).subscribe(
          data=>{
             console.log("after delete play");
             alert("המשחק נמחק");
           
           this.playServ.getAllPlay().subscribe((data:PlayDto[])=>{
            this.plays=data;
            console.log(data);
          },error=>{
            console.log(error);
          })
        }) 
          }
          else{
            alert("סיסמא שגויה");
          }
     }
   )

     
    }
  beforePutPlay()
  {
    console.log("before put play");

    this.playService.whatId(this.CheckUserPassword).subscribe(
      (data:string)=>{
        if(data==this.selectedPlay.userIdCreator){
         
            this.isDivVisible=true;
    }
      else 
      alert("סיסמא שגויה");
   })
  }
  putPlay(){    
    
  this.playService.putPlay(this.selectedPlay).subscribe(
    (data:PlayDto)=>{
   
     this.newPlay = data;
     this.playService.setCurrentPlay(data);
     console.log("after put play");
     alert("המשחק עודכן");
     this.displayDialog=false;
     //this.selectedPlay.userIdCreator=null;
     this.CheckUserPassword=null;
   
    }

 )



}
toQuestionnaire()
{
  this.router.navigate(['/questionsP',this.selectedPlay.questionnaireCode]); 
}
}