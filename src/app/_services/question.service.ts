import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Question, QuestionDetail } from '../_models/index';

@Injectable()
export class QuestionService {

    public question : Question = null;
    public idCategory : string = null;
    public questionDetail : QuestionDetail = null;

    constructor(private http: Http) { }

    getById(_id: string) {
        return this.http.get('api/admin/questions/' + _id).map((response: Response) => response.json());
    }

    getByPos(pos: number) {
        return this.http.get('api/admin/questions/pos/' + pos).map((response: Response) => response.json());
    }

    getAll() {
        return this.http.get('api/admin/questions/').map((response: Response) => response.json());
    }

    create(question: QuestionDetail) {
        return this.http.post('api/admin/questions/create', {question: this.question, questionDetail: question,
          idCategory: this.idCategory});
    }

    update(question: QuestionDetail) {
        return this.http.put('api/admin/questions/update', question);
    }

    delete(question: Question) {
        return this.http.post('api/admin/questions/delete', question);
    }
}
