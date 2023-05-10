import { Component, OnInit } from '@angular/core';
import { PlayDto, UserDto } from '../models';
import { playDetails } from '../services/PlayDetails.service';
import {user} from "../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionComponent } from '../question/question.component';
import { AppComponent } from '../app.component';

 export class myTime {
  hours: number;
minutes: number;
seconds:number
} 

@Component({
  selector: 'app-play-details',
  templateUrl: './play-details.component.html',
  styleUrls: ['./play-details.component.css']
})

export class PlayDetailsComponent implements OnInit {
   
    

  PlayCode: number;
  QuestionnaireCode:number;
  DateOfPlay:Date;
  HourOfstartJoiningToPlay:string;
  HourOfstartPlay:string;
  HourOfEndPlay:string;
  UserPassword:string;
  NameOfPlay:string;
  newPlay:PlayDto=new PlayDto();
  

  QuestionnairName:string="any";

  userDisplay: boolean = false;


  display: boolean = false;

  userName:string;
  userPassword:string;
  userId:string;
  myNewUser:UserDto =new UserDto();
  user:UserDto =new UserDto();

  
  constructor(public PlayServ:playDetails,private userService: user, private router:Router,private route:ActivatedRoute) {
    console.log("play ctor");
    
  

   }

  ngOnInit() {
    if(this.route.snapshot.params['currentQC'])
      this.PlayServ.saveHalfDetailse.questionnaireCode=JSON.parse(this.route.snapshot.params['currentQC']);
  }
  showDialog() {
    this.userDisplay = true;
}

  savePlay(){
    
     console.log("before post play"); 
      
    this.PlayServ.GetQuestionnaireCodeByName(this.QuestionnairName).subscribe((data: number)=>{
      console.log(this.QuestionnairName);
     
       this.QuestionnaireCode=data;
       if(this.QuestionnairName!="any")
        this.newPlay.questionnaireCode=this.QuestionnaireCode;

this.newPlay.playCode=null;
    

this.newPlay.userIdCreator=this.PlayServ.saveHalfDetailse.userIdCreator;
this.newPlay.nameOfPlay=this.PlayServ.saveHalfDetailse.nameOfPlay;
this.newPlay.questionnaireCode=this.PlayServ.saveHalfDetailse.questionnaireCode;
       this.PlayServ.savePlay(this.newPlay).subscribe(
        (data1:PlayDto)=>{
         this.newPlay = data1;
         this.PlayServ.setCurrentPlay(data1);
          console.log("after post play");
          alert("המשחק נוסף");
          this.router.navigate(['/']); 
        }
     );
        },error=>{
         
           console.log(error);
        }      
      );  
   }

   saveUser(){
    console.log("before post user");
    this.userDisplay=false;
    this.user.userName=this.userName;
    this.user.password=this.userPassword;
    this.user.userId=this.userId;
    this.userService.saveUser(this.user).subscribe(
      (data:UserDto)=>{
       this.myNewUser = data;
       if(data==null)
          alert("סיסמא קיימת בחר סיסמא אחרת");
        else{
       this.userService.setCurrentUser(data);
        console.log("after post user");
        alert("המשתמש נוסף");
      }
      }
   )
  }
  
  showDialogQ() {
      this.display = true;
  }

change(){
 AppComponent.isNew=true;
}
  

  toQuestions()
  {
    this.change();
    this.router.navigateByUrl("/questions");
  }
  toQuestannaire(){
    this.router.navigateByUrl("/questannaire");
  }
}






