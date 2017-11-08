export class Category {
    constructor(
        public _id: string,
        public name: string,
        public pos: number,
        public questions: QuestionBasic[],
        public idSurvey: string
    ){}
}

export class QuestionBasic {
    constructor(
        public idQuestion: string,
        public pos: number,
        public title: string,
        public idCategory: string
    ){}
}
