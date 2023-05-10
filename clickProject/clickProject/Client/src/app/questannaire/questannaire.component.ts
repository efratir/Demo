import { Component, OnInit } from '@angular/core';
import {QuestionnaireDto } from '../models/dto/questionnaireDto'
import { questionnaire } from '../services/Questionnaire.service';
import { subject } from '../services/Subject.service';
import { SubjectDto } from '../models/dto/SubjectDto';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { playDetails } from '../services/PlayDetails.service';
import { QuestionComponent } from '../question/question.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-questannaire',
  templateUrl: './questannaire.component.html',
  styleUrls: ['./questannaire.component.css'],
  providers: [
    questionnaire // added class in the providers
  ]
})
export class QuestannaireComponent implements OnInit {
  subjects:SubjectDto[]=[];


  QuestionnaireCode: number;
  subjectCode:number;
  MatchingFromAge:number;
  MatchingUntilAge:number;
  questionnaireName:string;
  displayDialog: boolean;
  newQuestannaire:QuestionnaireDto=new QuestionnaireDto();

  Display:boolean;
  SubjectCode: number;
  SubjectName:string;
  myNewSubject:SubjectDto =new SubjectDto();
 
  subjectDisplay:boolean=false;
  selectedQuestionnaire: QuestionnaireDto;

   constructor(private QuestionnaireServ:questionnaire,private subjectServ:subject,private router:Router,private playDetailsServ:playDetails) {
    
     this.subjectServ.getAllSubject().subscribe((data:SubjectDto[])=>{
       this.subjects=data;
       console.log(data);
     },error=>{
       console.log(error);
     })
}
   
    
  ngOnInit() {
 
  }


  saveQuestannaire(){
  
     console.log("before post Questannaire");
     
     this.newQuestannaire.questionnaireName=this.questionnaireName;
     this.newQuestannaire.questionnaireCode=this.QuestionnaireCode;
     this.newQuestannaire.subjectNameCode=this.subjectCode;
     this.newQuestannaire.matchingFromAge=this.MatchingFromAge;
     this.newQuestannaire.matchingUntilAge=this.MatchingUntilAge;

     this.QuestionnaireServ.saveQuestionnaire(this.newQuestannaire).subscribe(
       (data:QuestionnaireDto)=>{
        this.newQuestannaire = data;
        this.QuestionnaireServ.setCurrentQuestionnaire(this.newQuestannaire);
         console.log("after post Questionnaire");
         alert("השאלון נוסף");

         AppComponent.isNew=true;

         this.playDetailsServ.GetQuestionnaireCodeByName(this.QuestionnaireServ.currentQuestionnaire.questionnaireName).subscribe(
           (data1:number)=>{
            this.newQuestannaire.questionnaireCode=data1;
            var x=this.newQuestannaire.questionnaireCode;
            this.router.navigate(['/question',x]); 
           })



        
         
       }
    )
   }
  //  selectQuestionnaire(event: Event, Questionnaire: QuestionnaireDto,subjectServ:subject) {
  //   this.selectedQuestionnaire = Questionnaire;
  //   this.displayDialog = true;
  //   event.preventDefault();

  //  }
   saveSubject(){
     
    console.log("before post subject");
    this.myNewSubject.subjectCode=0;
  
    this.subjectServ.saveSubject(this.myNewSubject).subscribe(
      (data:SubjectDto)=>{
        // this.myNewSubject=data;
       
        // this.subjectServ.setCurrentSubject(data);

        console.log("after post Subject");
        alert("הנושא נוסף");
      
        this.subjectDisplay = false;
        this.subjectServ.getAllSubject().subscribe((data:SubjectDto[])=>{
          this.subjects=data;
          console.log(data);
        },error=>{
          console.log(error);
        })
      }
    )
  }
  showDialog() {
    this.subjectDisplay = true;
}

}
