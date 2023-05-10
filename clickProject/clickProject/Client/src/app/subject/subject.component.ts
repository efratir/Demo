import { Component, OnInit } from '@angular/core';
import {SubjectDto} from '../models/dto/SubjectDto';
import {subject} from "../services/subject.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  SubjectCode: number;
  SubjectName:string;
  myNewSubject:SubjectDto =new SubjectDto();
  constructor( private subject: subject) { }

  ngOnInit() {
  }
  saveSubject(){
    console.log("before post subject");
    
    this.myNewSubject.subjectCode=this.SubjectCode;
    this.myNewSubject.subjectName=this.SubjectName;
    this.subject.saveSubject(this.myNewSubject).subscribe(
      (data:SubjectDto)=>{
        
        this.myNewSubject=data;
        this.subject.setCurrentSubject(data);
        console.log("after post Subject");
        alert("הנושא נוסף");
      }
    )
  }
  }