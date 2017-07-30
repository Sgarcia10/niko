export class QuestionDetail {
    constructor(
        public _id: string,
        public title: string,
        public type: string,
        public options : Option [],
        public help : Message
    ){}
}

export class Option{
    constructor(
        public _id: string,
        public text : string,
        public jump: number,
        public textBox : boolean,
        public message : Message
    ){}
}

export class Message{
    constructor(
        public _id : string,
        public title : string,
        public text : string,
        public downloadURL : DownloadURL,
        public uploadURL : boolean,
    ){}
}


export class DownloadURL{
    constructor(
        public name : string,
        public url : string
    ){}
}
