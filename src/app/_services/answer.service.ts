import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { QuestionAnswered, Question } from '../_models/index';

@Injectable()
export class AnswerService {

    private questionAnswered: QuestionAnswered = null;

    constructor(private http: Http) { }

    public create() {
        return this.http.post('api/user/answer/create', this.questionAnswered)
          .map((response: Response) => response.json());
    }

    public finishProject(idProject: string) {
        return this.http.put('api/user/projects/finish/'+idProject, {})
          .map((response: Response) => response.json());
    }

    public getResult(idSurvey: string) {
        return this.http.get('api/user/answers/remarks/'+idSurvey)
          .map((response: Response) => response.json());
    }

    public getByPos(pos: string, idProject: string) {
        return this.http.get('api/user/answers/position/'+pos+','+idProject)
          .map((response: Response) => response.json());
    }

    public remove(id: string) {
        return this.http.delete('api/user/answer/'+id)
          .map((response: Response) => response.json());
    }

    public getQuestionAnswered(){
      return this.questionAnswered;
    }

    public setQuestionAnswered(q: QuestionAnswered){
      this.questionAnswered = q;
    }

    // update(question: QuestionDetail) {
    //     return this.http.put('api/admin/questions/update', question);
    // }
    //
    // delete(question: Question) {
    //     return this.http.post('api/admin/questions/delete', question);
    // }
}
