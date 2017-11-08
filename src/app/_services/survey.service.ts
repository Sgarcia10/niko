import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Survey } from '../_models/index';

@Injectable()
export class SurveyService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('api/admin/surveys').map((response: Response) => response.json());
    }


    create(survey: Survey) {
        return this.http.post('api/admin/surveys/create', survey);
    }

    update(survey: Survey) {
        return this.http.put('api/admin/surveys/update', survey);
    }

    delete(_id: string) {
        return this.http.delete('api/admin/surveys/' + _id);
    }
}
