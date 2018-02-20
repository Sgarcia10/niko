import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MailService {
  constructor(private http: Http) { }

  public sendMail() {
      return this.http.post('api/user/sendMail', { })
        .map((response: Response) => response.json());
  }
}
