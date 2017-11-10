import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project} from '../_models/index';

@Injectable()
export class ProjectService {

    public currentProject: Project = null;

    constructor(private http: Http) { }

    getById(_id: string) {
        return this.http.get('api/admin/questions/' + _id).map((response: Response) => response.json());
    }

    create(project: Project) {
        return this.http.post('api/user/projects/create', project)
        .map((response: Response) => response.json());
    }

    getByUserId(_id: string) {
        return this.http.get('api/user/projects/' + _id).map((response: Response) => response.json());
    }

    getActiveSurvey(){
        return this.http.get('api/user/projects/activeSurvey')
        .map((response: Response) => response.json());
    }

    delete(_id: string) {
        return this.http.delete('api/user/projects/'+_id);
    }

    // update(question: QuestionDetail) {
    //     return this.http.put('api/admin/questions/update', question);
    // }
    //
}
