import {Question} from './question';

export class CategoryFull {
    constructor(
        public _id: string,
        public name: string,
        public pos: number,
        public questions: Question[],
        public idSurvey: string
    ){}
}
