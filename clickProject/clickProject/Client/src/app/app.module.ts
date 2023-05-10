import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//prime-ng
import { KeyFilterModule } from 'primeng/keyfilter';
import { CheckboxModule, MenuModule, ContextMenuModule, ButtonModule, PanelModule, InputTextModule, DropdownModule, StepsModule,SpinnerModule, DataTableModule, TabMenuModule, FileUploadModule, RadioButtonModule, InputMaskModule,
    ProgressSpinnerModule, LightboxModule, ScrollPanelModule
} from 'primeng/primeng';
import { CardModule } from 'primeng/card';
//app components
import { AppComponent } from './app.component';
import { MAIN_COMPONENTS } from './+main';
import { SHARED_COMPONENTS } from '../app/shared/uix/components/index'
import {AUTH_COMPONENTS} from './+auth';

//app modules
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule, questionnaire } from './services';
import { SharedModule, BaseHttpService } from './shared';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DataViewModule} from 'primeng/dataview';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import {TabViewModule} from 'primeng/tabview';
import { SliderModule } from 'primeng/slider';
import {InputSwitchModule} from 'primeng/inputswitch';
import { AaaComponent } from './aaa/aaa.component';
import { EnteranceAllComponent } from './enterance-all/enterance-all.component';
import { ParticipantEnteranceComponent } from './participant-enterance/participant-enterance.component';
import { PlayDetailsComponent } from './play-details/play-details.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestannaireComponent } from './questannaire/questannaire.component';
import { QuestionComponent } from './question/question.component';
import { enteranceAll } from './services/enteranceAll.service';
import { HttpModule } from '@angular/http';
import { NewUserComponent } from './new-user/new-user.component';
import { SubjectComponent } from './subject/subject.component';
import { ThePlayComponent } from './the-play/the-play.component';
import { WinnerComponent } from './winner/winner.component';
import {QuestionsPComponent} from './questionsP/questionsP.component'

@NgModule({
  declarations: [
    //app components
    AppComponent,
    ...MAIN_COMPONENTS,
    ...SHARED_COMPONENTS,
    ...AUTH_COMPONENTS,
    AaaComponent,
    EnteranceAllComponent,
    ParticipantEnteranceComponent,
    PlayDetailsComponent,
    QuestionsComponent,
    QuestionsPComponent,
    QuestannaireComponent,
    QuestionComponent,
    NewUserComponent,
    SubjectComponent,
    ThePlayComponent,
    WinnerComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule ,

    //app modules
    ServicesModule,
    SharedModule,

    //prime-ng modules
    MenuModule,
    CheckboxModule,
    ContextMenuModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    ScrollPanelModule,
    // VirtualScrollerModule,
    StepsModule,
    TabMenuModule,
    DataTableModule,
    DataViewModule,
    CalendarModule,
    DialogModule,
    AutoCompleteModule,
    MessagesModule,
    MessageModule,
    KeyFilterModule,
    TabViewModule,

    RadioButtonModule,
    InputMaskModule,
    FileUploadModule,
    SliderModule,
    SpinnerModule,
    ProgressSpinnerModule,
    LightboxModule,
    BrowserAnimationsModule,
      InputSwitchModule,
      ServicesModule
  ],
  providers: [
   // AutoService,
    //AuthGuard
    //enteranceAll,
    // QuestionComponent,
    questionnaire,
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
