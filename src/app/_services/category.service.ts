import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Category, Question } from '../_models/index';

@Injectable()
export class CategoryService {


    constructor(private http: Http) { }

    getAll() {
        return this.http.get('api/admin/categories').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('api/admin/categories/' + _id).map((response: Response) => response.json());
    }

    create(category: Category) {
        return this.http.post('api/admin/categories/create', category);
    }

    update(category: Category) {
        return this.http.put('api/admin/categories/' + category._id, category);
    }

    delete(_id: string) {
        return this.http.delete('api/admin/categories/' + _id);
    }
}
