export class QuestionDetail {
    constructor(
        public _id: string,
        public title: string,
        public type: string,
        public textArea : string,
        public options : Option [],
        public help : Message
    ){}
}

export class Option{
    constructor(
        public _id: string,
        public selected : boolean,
        public text : string,
        public jump: number,
        public isTextArea : boolean,
        public textArea : string,
        public message : Message
    ){}
}

export class Message{
    constructor(
        public title : string,
        public text : string,
        public downloadURL : DownloadURL,
        public isUploadURL : boolean,
        public uploadURL : string
    ){}
}


export class DownloadURL{
    constructor(
        public name : string,
        public url : string
    ){}
}
