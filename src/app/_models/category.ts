export class Category {
    constructor(
        public _id: string,
        public name: string,
        public pos: Number,
        public questions: Question[]
    ){}
}

export class Question {
    constructor(
        public idQuestion: string,
        public pos: number,
        public title : string
    ){}
}
