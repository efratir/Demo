import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';
import {SplitButtonModule} from 'primeng/splitbutton';
import { questionnaire } from '../services/questionnaire.service';
import { question } from '../services/question.service';
import { playDetails } from '../services/playDetails.service';
import { QuestionnaireDto } from '../models/dto/QuestionnaireDto';

import { QuestionDto } from '../models/dto/QuestionDto';

import {Router} from '@angular/router';
import { PlayDetailsComponent } from '../play-details/play-details.component';
import { QuestionComponent } from '../question/question.component';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers:[question,playDetails]
})
export class QuestionsComponent implements OnInit {
  Questionnaires:QuestionnaireDto[];
  index=0;
  currentQN:any;
  currentQC:number;
  currentQuestion:QuestionDto[];
  selectedQuestion:QuestionDto;
  displayDialog: boolean;
  QuestionContext:string;
  newQuestion:QuestionDto;
  // @Output() currentToDelete = new EventEmitter();
   flag:boolean;
  
  constructor(private questionnaireServ:questionnaire,private questionServ:question ,private playServ:playDetails,private router:Router) { 
      this.questionnaireServ.getAllQuestionnaireNotOpenNow().subscribe((data:QuestionnaireDto[])=>{
    this.Questionnaires=data;
    console.log(data);
    this.currentQN=data[this.index].questionnaireName;
    this.currentQC=data[this.index].questionnaireCode;
  

    this.questionnaireServ.getQuestionsByQuestionnaire(this.currentQC).subscribe((data1:QuestionDto[])=>{
      this.currentQuestion = data1;
      console.log(data1);
     }
  )
  },)
  this.flag=false;
}
  ngOnInit() {
  }
  getNextQuestionnaire()
   {
    this.index+=1;
    this.flag=false;
    if(this.index<this.Questionnaires.length)
    {
      this.currentQN=this.Questionnaires[this.index].questionnaireName;
      this.currentQC=this.Questionnaires[this.index].questionnaireCode;
      this.questionnaireServ.getQuestionsByQuestionnaire(this.currentQC).subscribe((data1:QuestionDto[])=>{
        this.currentQuestion = data1;
        console.log(data1);})
    }
    else
      this.index-=1;
   }

   getLastQuestionnaire()
   {
    this.index-=1;
    if (this.index!=-1)
    {
      this.currentQN=this.Questionnaires[this.index].questionnaireName;
      this.currentQC=this.Questionnaires[this.index].questionnaireCode;
      this.flag=false;
      this.questionnaireServ.getQuestionsByQuestionnaire(this.currentQC).subscribe((data1:QuestionDto[])=>{
        this.currentQuestion = data1;
        console.log(data1);})
    }
    else{
     this.flag=true;
     this.index=0;
     }
   }
   selectQuestion(event: Event, Question: QuestionDto) {
    this.selectedQuestion = Question;
    this.displayDialog = true;
    event.preventDefault();
  
    // this.questionServ.GetQuestionContextByCode(this.selectedQuestion.questionCode).subscribe((data: string)=>{
    //   console.log(this.selectedQuestion.questionCode);
    //   debugger;
    //    this.QuestionContext=data;
    //   }
    // )

}
deleteQuestion(QuestionCode:Number){
  this.questionServ.deleteMyQuestion(QuestionCode).subscribe(
    data=>{
       console.log("after delete play");
       alert("השאלה נמחקה");
       this.questionnaireServ.getQuestionsByQuestionnaire(this.currentQC).subscribe((data1:QuestionDto[])=>{
        this.currentQuestion = data1;
        console.log(data1);
       }
    )
    },)  
   
}
putQuestion(){    
  console.log("before put Question");
 
  
this.questionServ.putQuestion(this.selectedQuestion).subscribe(
  (data:QuestionDto)=>{
 
   this.newQuestion = data;
   this.questionServ.setCurrentQuestion(data);
   console.log("after put Question");
   alert("המשחק עודכן");
   this.questionnaireServ.getQuestionsByQuestionnaire(this.currentQC).subscribe((data1:QuestionDto[])=>{
    this.currentQuestion = data1;
    console.log(data1);
    alert();
    this.displayDialog=false;


    this.questionnaireServ.getQuestionsByQuestionnaire(this.currentQC).subscribe((data1:QuestionDto[])=>{
      this.currentQuestion = data1;
      console.log(data1);
     }
  )
  },
)
   }
  
)
  

}


deleteQuestionnaire(QuestionnaireCode:Number){
    
  this.questionnaireServ.deleteMyQuestionnaire(QuestionnaireCode).subscribe(
    data=>{
       console.log("after delete Questionnaire");
       alert("השאלון נמחק");
       
     
    //  this.questionnaireServ.getQuestionsByQuestionnaire(this.currentQC).subscribe((data1:QuestionDto[])=>{
    //   this.currentQuestion = data1;
    //   console.log(data1);
    //  }
    // )

    this.questionnaireServ.getAllQuestionnaireNotOpenNow().subscribe((data:QuestionnaireDto[])=>{
   
      this.Questionnaires=data;
      console.log(data);
      this.currentQN=data[this.index].questionnaireName;
      this.currentQC=data[this.index].questionnaireCode;
    
  
      this.questionnaireServ.getQuestionsByQuestionnaire(this.currentQC).subscribe((data1:QuestionDto[])=>{
        this.currentQuestion = data1;
        console.log(data1);
       }
    )
    })
  },)
   
    
}
selectQuestionnaire()
{

//  this.g.PlayServ.saveHalfDetailse.questionnaireCode=this.currentQC;
  // this.playServ.saveHalfDetailse.questionnaireCode=this.currentQC;
  // this.playServ.setquestionnaireCode(this.currentQC);
  console.log("saveHalfDetailse:" ,this.playServ.saveHalfDetailse);
  this.router.navigate(['/playDetails',this.currentQC]); 
  // this.router.navigateByUrl("/playDetails:");
}
}
