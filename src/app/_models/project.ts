export class Project {
    constructor(
        public _id: string,
        public idSurvey: string,
        public currentQuestionPos: number,
        public title: string,
        public adviser: string,
        public subject: string,
        public activity: string,
        public type: string,
        public period: Period,
        public program: string,
        public user: UserProject
    ){}
}

export class Period {
    constructor(
        public year: number,
        public semester: number
    ){}
}

export class UserProject {
    constructor(
        public userId: string,
        public username: string,
        public code: string
    ){}
}
