import { Component, OnInit, Input } from '@angular/core';
import { question } from '../services/question.service';
import { QuestionDto } from '../models/dto/QuestionDto';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { playDetails } from '../services/playDetails.service';
import { EnteranceAllComponent } from '../enterance-all/enterance-all.component';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [
    question ,
    playDetails// added class in the providers
  ]
})


export class QuestionComponent implements OnInit {
 myQuestion:QuestionDto=new QuestionDto();
 @Input() pointAnswer=1;

 
  constructor(private question:question,private route:ActivatedRoute,private router:Router,private playDetailsServ:playDetails ) {
  
   }

  ngOnInit() {

  }
  saveQuestionAndNext(){
    console.log("before post Question");
 

    this.myQuestion.questionnaireCode=JSON.parse(this.route.snapshot.params['currentQC']);
    
    this.myQuestion.pointAnswer=this.pointAnswer;
    this.question.saveQuestion(this.myQuestion).subscribe(
      (data:QuestionDto)=>{
        
        this.myQuestion=data;
        this.question.setCurrentQuestion(data);
        console.log("after post question");
        alert("ה question נוסף");      
        this.myQuestion.contentsOfQuestion=null;
        this.myQuestion.falseAnswer1=null;
        this.myQuestion.falseAnswer2=null;
        this.myQuestion.falseAnswer3=null;
        this.myQuestion.pointAnswer=1;
        this.myQuestion.questionCode=null;
        this.myQuestion.trueAnswer=null;
        this.router.navigate(['/question',data.questionnaireCode]); 
      }
    )
  }
  saveQuestion()
  {
 
    console.log("before post Question");
   

    this.myQuestion.questionnaireCode=JSON.parse(this.route.snapshot.params['currentQC']);
    
    this.myQuestion.pointAnswer=this.pointAnswer;
    this.question.saveQuestion(this.myQuestion).subscribe(
      (data:QuestionDto)=>{
    
        this.myQuestion=data;
        this.question.setCurrentQuestion(data);
        console.log("after post question");
        alert("ה question נוסף");  
        AppComponent.isNew!=null && AppComponent.isNew? this.router.navigate(['/questions']):this.router.navigate(['/questionsP',this.myQuestion.questionnaireCode]);
       // this.router.navigate(['/questions']); 
      }
    )
  }
  
}
