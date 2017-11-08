import {  Message } from './question';
export class Answer {
    constructor(
        public _id: string,
        public idProject: string,
        public currentPos: number,
        public questionsAsked: QuestionAsked [],
        public remarks: Message []
    ){}
}

export class QuestionAsked {
    constructor(
        public idQuestion: string,
        public title: string,
        public type: string,
        public optionsAnswered: OptionAnswered []
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
