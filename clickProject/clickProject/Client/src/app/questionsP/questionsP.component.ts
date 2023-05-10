import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';
import {SplitButtonModule} from 'primeng/splitbutton';
import { questionnaire } from '../services/questionnaire.service';
import { question } from '../services/question.service';
import { QuestionnaireDto } from '../models/dto/QuestionnaireDto';

import { QuestionDto } from '../models/dto/QuestionDto';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-questionsP',
  templateUrl: './questionsP.component.html',
  styleUrls: ['./questionsP.component.css'],
  providers:[question]
})
export class QuestionsPComponent implements OnInit {
  Questionnaires:QuestionnaireDto[];
  currentQN:any;
  currentQC:number;
  currentQuestion:QuestionDto[];
  selectedQuestion:QuestionDto;
  displayDialog: boolean;
  QuestionContext:string;
  newQuestion:QuestionDto;
  // @Output() currentToDelete = new EventEmitter();
   flag:boolean;
  
  constructor(private questionnaireServ:questionnaire,private questionServ:question,private route: ActivatedRoute) { 
    //   this.questionnaireServ.getAllQuestionnaireNotOpenNow().subscribe((data:QuestionnaireDto[])=>{
    // this.Questionnaires=data;
    // console.log(data);
    // this.currentQN=data[this.index].questionnaireName;
    this.currentQC=JSON.parse(this.route.snapshot.params['currentQC']);
  

    this.questionnaireServ.getQuestionsByQuestionnaire(this.currentQC).subscribe((data1:QuestionDto[])=>{
      this.currentQuestion = data1;
      console.log(data1);
     }
  // )
  // }
  ,)
    this.flag=false;
    }
  ngOnInit() {
    this.questionnaireServ.GetQuestionnaireNameByCode(this.currentQC).subscribe((data2:string)=>{
      this.currentQN=data2;
    })
    
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
deleteQuestion(QuestionCode:number){
  this.questionServ.deleteMyQuestion(QuestionCode).subscribe(
    data=>{
       console.log("after delete play");
       alert("השאלה נמחקה");
       
       this.questionnaireServ.getQuestionsByQuestionnaire(this.currentQC).subscribe((data1:QuestionDto[])=>{
        this.currentQuestion = data1;
        console.log(data1);
         })

     })
}

putQuestion(){    
  console.log("before put Question");
 
  
this.questionServ.putQuestion(this.selectedQuestion).subscribe(
  (data:QuestionDto)=>{
 
   this.newQuestion = data;
   this.questionServ.setCurrentQuestion(data);
   console.log("after put Question");
   alert("המשחק עודכן");
   this.displayDialog=false;
  }
)
}

}
