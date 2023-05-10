import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { BaseHttpService, BaseApiService } from "../shared";
import { ActivatedRoute, Router } from "@angular/router";

import { QuestionnaireDto } from "../models/dto/QuestionnaireDto"
import { QuestionDto } from "../models/dto/QuestionDto"

@Injectable()
export class questionnaire extends BaseApiService {
  currentQuestionnaire: QuestionnaireDto = new QuestionnaireDto();
  constructor(private router: Router, private baseHttpService: BaseHttpService) {
    super('Questionnaire');
  }


  setCurrentQuestionnaire(Questionnaire: QuestionnaireDto) {
    this.currentQuestionnaire = Questionnaire;
  }
  saveQuestionnaire(Questionnaire1: QuestionnaireDto): Observable<QuestionnaireDto> {
    let url = this.actionUrl('Update');
    return this.baseHttpService.post<QuestionnaireDto>(url, Questionnaire1);
  }

  getAllQuestionnaireNotOpenNow(): Observable<QuestionnaireDto[]> {
    let url = this.actionUrl('GetAllQuestionnaireNotOpenNow');
    console.log(url);

    return this.baseHttpService.get<QuestionnaireDto[]>(url);
  }

  getQuestionsByQuestionnaire(QuestionnaireCode: number): Observable<QuestionDto[]> {
    let url = this.actionUrl('GetAllQuestionsByQuestionnaire');
    return this.baseHttpService.get<QuestionDto[]>(url, QuestionnaireCode)
  }
  GetAllQuestionsByQuestionnaireWithMix(QuestionnaireCode: number): Observable<QuestionDto[]> {
    let url = this.actionUrl('GetAllQuestionsByQuestionnaireWithMix');
    return this.baseHttpService.get<QuestionDto[]>(url, QuestionnaireCode)
  }



  deleteMyQuestionnaire(QuestionnaireCode: Number) {

    let url = this.actionUrl('Remove');
    return this.baseHttpService.post<Number>(url, QuestionnaireCode);

  }
  GetQuestionnaireByPlay(playCode: number) {
    let url = this.actionUrl('GetQuestionnaireByPlay');
    return this.baseHttpService.get<number>(url, playCode)
  }
  GetQuestionnaireNameByCode(code: number) {
    let url = this.actionUrl('GetQuestionnaireNameByCode');

    return this.baseHttpService.get<string>(url, code)
  }
}
