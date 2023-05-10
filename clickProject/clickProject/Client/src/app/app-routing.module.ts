import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from "./app.component";

import { MAIN_ROUTES } from "./+main";
import {AUTH_ROUTES} from "./+auth";
import { enteranceAll } from './services';
import { ParticipantEnteranceComponent } from './participant-enterance/participant-enterance.component';
import { PlayDetailsComponent } from './play-details/play-details.component';
import { QuestannaireComponent } from './questannaire/questannaire.component';
import { QuestionComponent } from './question/question.component';
import { EnteranceAllComponent } from './enterance-all/enterance-all.component';
import { NewUserComponent } from './new-user/new-user.component';
import { SubjectComponent } from './subject/subject.component';
import { QuestionsComponent } from './questions/questions.component';
import { ThePlayComponent } from './the-play/the-play.component';
import { QuestionsPComponent } from './questionsP/questionsP.component';
import { WinnerComponent } from './winner/winner.component';
const APP_ROUTES: Routes = [
    
        //{path:'home',
        //component:AppComponent},
        {path:'',component:EnteranceAllComponent,},
        {path:'enteranceAll',component:EnteranceAllComponent,},
        {path:'participantEnterance',component:ParticipantEnteranceComponent,},
        {path:'playDetails',component:PlayDetailsComponent,},
        {path:'questannaire',component:QuestannaireComponent,},
        {path:'question',component:QuestionComponent,},
        {path:'newUser',component:NewUserComponent,},
        {path:'subject',component:SubjectComponent,},
        {path:'questions',component:QuestionsComponent,},
        {path:'thePlay/:data',component:ThePlayComponent,},
        {path:'question/:currentQC',component:QuestionComponent},
        {path:'questionsP/:currentQC',component:QuestionsPComponent},
        {path:'playDetails/:currentQC',component:PlayDetailsComponent},
        {path:'winner/:playCode/:hourOfEnd',component:WinnerComponent},
    ...AUTH_ROUTES, 
    ...MAIN_ROUTES    
];




@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES/*, { useHash: true }*/)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }