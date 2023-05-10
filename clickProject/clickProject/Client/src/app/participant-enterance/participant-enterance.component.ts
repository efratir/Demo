import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParticipantDto } from '../models/dto/participantDto';
import { PlayDto } from '../models/dto/playDto';
import { participantDetails } from '../services/participantDetails.service';
import { SaveParticipantDetails } from '../services/saveParticipantDetails.service';
import { UserDto, QuestionDto } from '../models';
import { questionnaire  } from '../services/questionnaire.service'
import {Router} from '@angular/router';
import {user} from '../services/user.service';
import { thePlay  } from '../services/thePlay.service';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@Component({
  selector: 'app-participant-enterance',
  templateUrl: './participant-enterance.component.html',
  styleUrls: ['./participant-enterance.component.css']
})
export class ParticipantEnteranceComponent implements OnInit {
  
  plays:PlayDto[]=[];
  playsCanBegin:PlayDto[]=[];
  NameOfPlay:string;
  // playCode:number;
  ParticipantId: string;
  ParticipantDateOfBirth:Date;
  userName:string;
  newParticipant:UserDto=new UserDto();
  newParticipantDetails= new ParticipantDto();
  questions:QuestionDto[];
  questionnaireCode:number;
  id:string;
  item:PlayDto;
  isNotExist:boolean;
  flagSpinner:boolean=true;
  myForm: FormGroup;
  key:string;
  constructor(private thePlayServ:thePlay,private playServ:participantDetails,private ParticipantDetailsServ: SaveParticipantDetails,private questionnaireServ:questionnaire,private router: Router,private userServ:user) {
   
    this.playServ.getAllPlayHappenNow().subscribe((data:any)=>{
    this.plays=data;
     console.log(data);


     this.myForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(2), Validators.maxLength(10)]),
      tz: new FormControl('', [Validators.required,Validators.minLength(9),Validators.maxLength(9)]),
      ParticipantDate:new FormControl (),
      playCode:new FormControl ('',[Validators.required]),
      CodeBegin:new FormControl ('',[Validators.required]),
      Code:new FormControl ('',[Validators.required]),
      
  });
     
    }
)
  
  }
ngOnInit() {
if(localStorage.getItem("tz")){
  this.id=localStorage.getItem("tz").toString();
  this.isNotExist=false;

  
          
     this.userServ.isExist(this.id).subscribe(
       (data1:UserDto)=>{
         this.newParticipant=data1;
       }
     )

          this.ParticipantDetailsServ.whatCanBegin(this.id).subscribe(
            (data2:PlayDto[])=>{
              this.playsCanBegin=data2;
              console.log(data2);
              console.log("after get playsCanBegin");
              if ((data2.length)>0)
              this.flagSpinner=false;
            }
              );
        
 }
 else
 this.isNotExist=true;
}
   saveParticipant(){
 
   
  
     console.log("before post participant");

    //  this.newParticipant.userId=this.ParticipantId;
    //  this.newParticipant.participantDateOfBirth=this.ParticipantDateOfBirth;
    //   this.newParticipant.userName=this.userName;
    
    //  this.newParticipantDetails.participantId=this.ParticipantId;
    //  debugger;
    //  this.newParticipantDetails.playCode=this.playCode;
   

     this.newParticipant.userId=this.myForm.controls.tz.value;
     this.newParticipant.participantDateOfBirth=this.myForm.controls.ParticipantDate.value;
     this.newParticipant.userName=this.myForm.controls.name.value;
     this.newParticipantDetails.participantId=this.myForm.controls.tz.value;
     
   
     //debugger;
    // this.newParticipantDetails.playCode=this.myForm.controls.playCode.value;
     let frmData = new FormData();
    
     this.playServ.isMatchAge(this.newParticipantDetails.playCode.toString(),this.ParticipantDateOfBirth.getFullYear().toString()).subscribe(
       (data:boolean)=>{
         if(data==false)
         {
           alert("גיל אינו תואם")
         }
         else
         {  
           if(this.key==this.newParticipantDetails.playCode.toString()){
          this.userServ.saveUser(this.newParticipant).subscribe(
            (data1:UserDto)=>{
              this.newParticipant=data1;
              this.userServ.setCurrentUser(data1);
              console.log("after post user");
              alert("המשתתף נוסף");
              this.ParticipantDetailsServ.saveParticipant(this.newParticipantDetails).subscribe(
                (data4:ParticipantDto)=>{
                 this.newParticipantDetails = data4;
                 this.ParticipantDetailsServ.setCurrentParticipant(data4);
                
          
              localStorage.setItem("tz",this.newParticipant.userId.toString());
              this.id=localStorage.getItem("tz").toString();
             
              this.ParticipantDetailsServ.whatCanBegin(this.id).subscribe(
                (data3:PlayDto[])=>{
                  this.playsCanBegin=data3;
                  console.log(data3);
                  console.log("after get playsCanBegin");
                  if ((data3.length)>0)
                  this.flagSpinner=false;
                }
             
              );
            }
          )
            }
        
          )
         }
         else
         {
           alert("קוד שגוי אין כניסה!!!")
         }
        }
       
       }
     )
   
  
   }
   playSelected(val){
    // debugger;
    this.newParticipantDetails.playCode = val;
   }
   getPlay(play:PlayDto)
   {
     this.questionnaireServ.GetQuestionnaireByPlay(play.playCode).subscribe((data:number)=>{
     this.questionnaireCode=data;
     this.questionnaireServ.GetAllQuestionsByQuestionnaireWithMix(this.questionnaireCode).subscribe(
       (data:QuestionDto[])=>{
         this.questions=data;
         console.log(data);
         this.thePlayServ.getQuetions(data);
        
         this.thePlayServ.playCode=play.playCode;
        let hourEnd: number =parseInt(play.hourOfEndPlay)
        this.thePlayServ.hourOfEnd=play.hourOfEndPlay;
        
         this.router.navigate(['/thePlay',/*data[0]*/0]);
     
       }
      );
      }
    )
  }
}

