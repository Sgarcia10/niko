﻿import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Answer } from '../_models/index';

@Injectable()
export class AnswerService {

    public answer: Answer = null;

    constructor(private http: Http) { }

    getById(_id: string) {
        return this.http.get('api/admin/questions/' + _id).map((response: Response) => response.json());
    }

    create() {
        return this.http.post('api/user/answer/create', this.answer)
          .map((response: Response) => response.json());
    }

    // update(question: QuestionDetail) {
    //     return this.http.put('api/admin/questions/update', question);
    // }
    //
    // delete(question: Question) {
    //     return this.http.post('api/admin/questions/delete', question);
    // }
}
