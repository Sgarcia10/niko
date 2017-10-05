import { QuestionDetail, Message } from './question'
export class Answer {
    constructor(
        public _id: string,
        public idProject: string,
        public currentPos : number,
        public questions: QuestionDetail [],
        public remarks : Message []
    ){}
}
