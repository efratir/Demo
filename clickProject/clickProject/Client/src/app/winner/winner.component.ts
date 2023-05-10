import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { winner} from"../services/winner.service";
import { forEach } from '@angular/router/src/utils/collection';
import { map } from 'rxjs/operator/map';
import { Question, Winner } from '../models/dto/winer';

// import { thePlay } from '../services/thePlay.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})

export class WinnerComponent implements OnInit {
playCode:number;
index=0;
question:Question[]=[];
WinnerForQuestoinsLst=new Map<number, Map<string,string>>();
endWinners=[];
 lst=[];

hourOfEndPlay:string;
show:boolean=false;
x:any;
y:any;
  constructor(private route:ActivatedRoute ,private winnerServ:winner) { 
    this.playCode=JSON.parse(this.route.snapshot.params['playCode']);
    this.hourOfEndPlay=(this.route.snapshot.params['hourOfEnd']);
  }




  ngOnInit() {
   
   
  }
  // get key() {
  //   this.x=Object.keys(this.WinnerForQuestoinsLst);
  //   debugger;

  //  return this.x;
  // }
  // get key1() {
   
  //   return Object.keys(this.x);
   
  // }
 
 


        

  getWinners()
  { 
    var currenthour = new Date().getHours();
    var currentMinutes=new Date().getMinutes();
    var dd=this.hourOfEndPlay.split(":");
 if(parseInt(dd[0])<currenthour || parseInt(dd[0])==currenthour && parseInt(dd[1])<currentMinutes)
    
  {
   
    this.winnerServ.WinnerForQuestoins(this.playCode).subscribe(
      (data:Map<number, Map<string,string>>)=>{
       
       
     this.WinnerForQuestoinsLst=data;
     var list=Object.keys(data);
     list.forEach(element => {
       var winers:Winner[]=[];
       var keysList = Object.keys(data[element]);
       var valueList = Object.values(data[element]);
       for(var i=0;i< keysList.length;i++)
       {
        winers.push({id:valueList[i],name:keysList[i]});
       }
      
      this.question.push({code:parseInt(element),winers:winers});
     });




     console.log(this.WinnerForQuestoinsLst);
 
     this.show=true;
    
  this.winnerServ.EndWinner().subscribe(
  (data:string[])=>{
    this.endWinners=data;
    this.show=true;
  }
  )
       }
      );
   localStorage.clear();
  }
}

}

