import { Injectable } from '@angular/core';
import { BaseApiService, BaseHttpService } from '../shared';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { QuestionDto } from '../models/dto/QuestionDto'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ParticipantDto } from '../models';

@Injectable()
export class thePlay extends BaseApiService {
    myQuetions: QuestionDto[];
    playCode: number;
    participantAnswer: ParticipantDto = new ParticipantDto();
    hourOfEnd: string;

    constructor(private baseHttpService: BaseHttpService) {
        super('Participant');


    }
    getQuetions(quetions: QuestionDto[]) {
        this.myQuetions = quetions;

    }
    getCurrentQuetion(currentQuetion: number) {
        return this.myQuetions[currentQuetion];

    }
    saveAnswer(timeResponse: number, index: number, isTrueOrFalse: boolean) {
        if (isTrueOrFalse == true)
            this.participantAnswer.trueOrFalseAnswer = true;
        else {
            this.participantAnswer.trueOrFalseAnswer = false;
        }
        this.participantAnswer.participantId = localStorage.getItem("tz");
        this.participantAnswer.timeOfRespond = timeResponse;
        this.participantAnswer.questoinCode = this.myQuetions[index - 1].questionCode;

        this.participantAnswer.playCode = this.playCode;
        let url = this.actionUrl('Post');

        return this.baseHttpService.post<ParticipantDto>(url, this.participantAnswer);
    }
    IfTrueAnswer(answerContext: string, questionCode: string) {
        let url = this.actionUrl('IfTrueAnswer');
        let params: URLSearchParams = new URLSearchParams();
        params.set('answerContext', answerContext);
        params.set('questionCode', questionCode)
        console.log(url);
        return this.baseHttpService.get<boolean>(url, params);
    }


}
