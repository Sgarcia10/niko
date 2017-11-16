import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { QuestionBasic, Question, Survey } from '../_models/index';

@Injectable()
export class QuestionService {

    private questionBasic: QuestionBasic = null;
    private question: Question = null;
    private currentSurvey: Survey = null;

    constructor(private http: Http) { }

    getById(_id: string) {
        return this.http.get('api/admin/questions/' + _id).map((response: Response) => response.json());
    }

    getByPos(pos: number, idSurvey: string) {
        return this.http.get('api/user/questions/pos/' + pos + ',' + idSurvey).map((response: Response) => response.json());
    }

    getAll() {
        return this.http.get('api/admin/questions/').map((response: Response) => response.json());
    }

    create() {
        return this.http.post('api/admin/questions/create', {questionBasic: this.questionBasic, question: this.question});
    }

    update() {
        return this.http.put('api/admin/questions/update', this.question);
    }

    delete(id: string, pos: number) {
        return this.http.delete('api/admin/questions/'+ id + ',' + pos );
    }

    setQuestionBasic(questionBasic: QuestionBasic){
        this.questionBasic = questionBasic;
    }

    getQuestionBasic(){
        return this.questionBasic;
    }

    setQuestion(question: Question){
        this.question = question;
    }

    getQuestion(){
        return this.question;
    }

    setCurrentSurvey(survey: Survey){
      this.currentSurvey = survey;
    }

    getCurrentSurvey(){
      return this.currentSurvey;
    }
}
