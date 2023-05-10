import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/primeng';
import { question } from '../services';
import { QuestionDto, ParticipantDto } from '../models';
import {ActivatedRoute} from '@angular/router';
 import {thePlay} from "../services/thePlay.service";
 import {Router} from '@angular/router';
import { stat } from 'fs';
import { state } from '@angular/animations';
@Component({
  selector: 'app-the-play',
  templateUrl: './the-play.component.html',
  styleUrls: ['./the-play.component.css']
})
export class ThePlayComponent implements OnInit {
  
  selectAnswer: string;
  // selectedOption: string;
  timeResponse:number;
  display: boolean = false;
  currentQuestion:QuestionDto;
  index:number;
  date1_ms:any;
 
constructor(private route:ActivatedRoute ,private thePlayServ:thePlay,private router: Router)
{
this.index=JSON.parse(this.route.snapshot.params['data']);
console.log(JSON.parse(this.route.snapshot.params['data']));
console.log(this.index);
var d = new Date();
this.date1_ms = d.getTime();

  this.currentQuestion=this.thePlayServ.getCurrentQuetion(this.index);
  console.log(this.currentQuestion);
}

  

 
  ngOnInit() { 


   

}


nextQuestion()
{ 

  var d2 = new Date();
  var date2_ms = d2.getTime();
  this.timeResponse= Math.abs(date2_ms-this.date1_ms);
  console.log("date1_ms",this.date1_ms);
  console.log("date2_ms",date2_ms);
  console.log("timeResponse:",this.timeResponse);

  this.thePlayServ.IfTrueAnswer(this.thePlayServ.myQuetions[this.index][this.selectAnswer],this.thePlayServ.myQuetions[this.index].questionCode.toString()).subscribe(
 
    (data:boolean)=>{
      
      if(data==true)
      {
        this.thePlayServ.saveAnswer(this.timeResponse,this.index,true).subscribe(
        (data:ParticipantDto)=>{ 
          var d = new Date();
          this.date1_ms = d.getTime(); 
        },
      )
      
      }
      else{
       
      if(data==false)
      {  
        this.thePlayServ.saveAnswer(this.timeResponse,this.index,false).subscribe(
          (data:ParticipantDto)=>{ 
            var d = new Date();
            this.date1_ms = d.getTime(); 
          },
       );
      
           
      }
    
      }
    })

    this.index+=1;
    var currenthour = new Date().getHours();
      var currentMinutes=new Date().getMinutes();
      var dd=this.thePlayServ.hourOfEnd.split(":");
   if(parseInt(dd[0])>currenthour || parseInt(dd[0])==currenthour && parseInt(dd[1])>=currentMinutes){
    
    if(this.index<this.thePlayServ.myQuetions.length){
    this.currentQuestion=this.thePlayServ.getCurrentQuetion(this.index);
    console.log(this.currentQuestion);
  }
      else{
    alert("finnish the time of end play and Display the winners is:"+this.thePlayServ.hourOfEnd);
    this.router.navigate(['/winner',this.thePlayServ.playCode,this.thePlayServ.hourOfEnd]);
    
   }
  }
    else{
    alert("this time is the time of end play.finish");
   
    this.router.navigate(['/winner',this.thePlayServ.playCode,this.thePlayServ.hourOfEnd]);
  }
  
    
  }
 
 
}

// saveAnswer()
// { 

// }

