export class Project {
    constructor(
        public _id: string,
        public idSurvey: string,
        public currentAnswerId: string,
        public title: string,
        public adviser: string,
        public subject: string,
        public activity: string,
        public type: string,
        public period: string,
        public program: string,
        public user: UserProject
    ){}
}

export class UserProject {
    constructor(
        public userId: string,
        public username: string,
        public code: string
    ){}
}
