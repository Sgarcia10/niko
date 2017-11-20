import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Category, Question } from '../_models/index';

@Injectable()
export class DashboardService {


    constructor(private http: Http) { }

    public getSurveys() {
        return this.http.get('api/admin/surveys').map((response: Response) => response.json());
    }

    public getQuestions(idSurvey: string) {
        return this.http.get('api/admin/dashboard/questions/'+idSurvey).map((response: Response) => response.json());
    }

    public getStats(idQuestion: string, idSurvey: string) {
        return this.http.get('api/admin/dashboard/stats/'+idQuestion+','+idSurvey).map((response: Response) => response.json());
    }

}
