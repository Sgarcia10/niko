import {  Message } from './question';

export class QuestionAnswered {
    constructor(
        public _id: string,
        public posQuestion: number,
        public idQuestion: string,
        public idSurvey: string,
        public idProject: string,
        public prevPos: number,
        public title: string,
        public type: string,
        public optionsAnswered: OptionAnswered [],
        public remarks: Message []
    ){}
}


export class OptionAnswered {
    constructor(
        public _id: string,
        public text: string,
        public checked: boolean,
        public ans: string
    ){}
}
