export class Question {
    constructor(
        public _id: string,
        public idSurvey: string,
        public title: string,
        public type: string,
        public options: Option [],
        public help: Message,
        public videoURL: string,
        public imageURL: string
    ){}
}

export class Option{
    constructor(
        public _id: string,
        public text: string,
        public jump: number,
        public isTextArea: boolean,
        public message: Message
    ){}
}

export class Message{
    constructor(
        public title: string,
        public text: string,
        public downloadURL: DownloadURL
    ){}
}


export class DownloadURL{
    constructor(
        public name: string,
        public url: string
    ){}
}
