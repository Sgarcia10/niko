import { Component, OnInit, NgZone, ElementRef,
  ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { Question, QuestionBasic, Category,
  Message, OptionAnswered, QuestionAnswered } from '../../_models/index';
import { QuestionService, AnswerService, AlertService } from '../../_services/index';
import { types } from '../../_data/questionTypes';
import blobStream from 'blob-stream';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterViewInit {

  @ViewChild('containerQuestion') elementView: ElementRef;
  private currentQuestion: Question;
  private currentQuestionAnswered: QuestionAnswered;
  private  height;
  private margin: number;
  private available: boolean;
  private isShowMessage: boolean;
  private isShowResult: boolean;
  private currentMessage: Message = null;
  private optionsAnswered: OptionAnswered[];
  private remarks: Message[];
  private types = types;

  constructor(
    private ngZone: NgZone,
    private questionService: QuestionService,
    private answerService: AnswerService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    window.onresize = (e) =>
    {
        ngZone.run(() => {
            this.height = window.innerHeight;
            let size = (this.height/2)-90;
            if (this.elementView){
              let sizeElem = this.elementView.nativeElement.offsetHeight/2;
              if (sizeElem > size) this.margin = 0;
              else this.margin = size-sizeElem;
            }
        });
    };
  }

  ngOnInit() {
    this.getMargin();
    if (this.answerService.getQuestionAnswered()){
      this.available = false;
      this.height = window.innerHeight;
      this.isShowResult = false;
      this.isShowMessage = false;
      this.remarks = [];
      this.currentQuestionAnswered = this.answerService.getQuestionAnswered();
      this.optionsAnswered = this.currentQuestionAnswered.optionsAnswered;
      this.loadCurrentQuestion();
    }
    else  this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngAfterViewInit(){
    window.scrollTo(0, 0);
  }

  private getMargin()
  {
    let size = this.height/2-90;
    if (this.elementView){
      let sizeElem = this.elementView.nativeElement.offsetHeight/2;
      if (sizeElem>size) return 0;
      else return size-sizeElem;
    }
    return 0;
  }


  private loadCurrentQuestion(){
      let currentPos = this.currentQuestionAnswered.posQuestion;
      this.questionService.getByPos(currentPos, this.currentQuestionAnswered.idSurvey)
        .subscribe(
          data => {
            if (!(data==='')){
              let question: Question = data;
              this.currentQuestion = question;
              if (this.currentQuestionAnswered.optionsAnswered.length === 0){
                this.loadAnswer();
              }
              this.available = true;
            }
            else{
              this.getResult();
            }
          },
          err => this.router.navigate(['../'], { relativeTo: this.route })
        );
  }

  private loadAnswer(){
      this.optionsAnswered = [];
      if (this.currentQuestion.type === types[2].type){
          let o: OptionAnswered = new OptionAnswered('a', types[2].type, true, '');
          this.optionsAnswered.push(o);
      }
      else if (this.currentQuestion.type === types[3].type){
          let o: OptionAnswered = new OptionAnswered('a', types[3].type, true, '');
          this.optionsAnswered.push(o);
      }
      else{
          for ( let option of this.currentQuestion.options){
              let o: OptionAnswered = new OptionAnswered(option._id, option.text, false, '');
              this.optionsAnswered.push(o);
          }
      }

      this.currentQuestionAnswered.idQuestion = this.currentQuestion._id;
      this.currentQuestionAnswered.title = this.currentQuestion.title;
      this.currentQuestionAnswered.type = this.currentQuestion.type;
      this.currentQuestionAnswered.optionsAnswered = this.optionsAnswered;
  }

  private save(){

  }


  private anterior(){
      // if(this.jump>0){
      //   this.currentPos = this.currentPos-this.jump-1;
      // }
      // else
      //   this.currentPos = this.currentPos-1;
      //   let long = this.answerService.answer.questions.length;
      // this.currentQuestion = this.answerService.answer.questions[long-2];
      // this.answerService.answer.questions.splice(this.currentPos-1,1);
      // this.jump = 0;

  }

  private siguiente(){
    // this.available = false;
    let currentPos = this.currentQuestionAnswered.posQuestion;
    let nextPos = this.jump();
    let idProject = this.currentQuestionAnswered.idProject;
    let idSurvey = this.currentQuestionAnswered.idSurvey;
    this.answerService.setQuestionAnswered(this.currentQuestionAnswered);
    this.answerService.create().subscribe(
      data => {
        this.currentQuestionAnswered = new QuestionAnswered('', nextPos, '',
        idSurvey, idProject, currentPos, '', '', [], []);
        if (nextPos>1) this.getResult();
        else this.loadCurrentQuestion();
      },
      err => {
         this.alertService.error(err);
      }
    );
  }

  private jump(): number{
      let i = 0;
      let n = 0;
      for (let option of this.optionsAnswered)
      {
        if (option.checked)
        {
          const message = this.currentQuestion.options[i].message;
          const jump = this.currentQuestion.options[i].jump;
          if (message){
            this.currentQuestionAnswered.remarks.push(message);
          }
          if (jump>n){
            n = jump;
          }
        }
        i++;
      }
      return this.currentQuestionAnswered.posQuestion + n + 1;
  }

  private getResult(){
    const idProject = this.currentQuestionAnswered.idProject;
    this.answerService.getResult(idProject).subscribe(
      data => {
        const finalMessage = new Message('', 'Esperamos que niko te haya ayudado.', null);
        this.remarks = data;
        this.remarks.push(finalMessage);
        this.isShowResult = true;
      },
      err => {
         this.alertService.error(err);
      }
    );
  }

  private closeResult(){
    this.isShowResult = false;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private downloadResult(){
    let doc = new PDFDocument();
    let stream = doc.pipe(blobStream());
    let date = new Date();
    let u = JSON.parse(localStorage.getItem('currentUser'));
    doc.font('Times-Bold')
      .fontSize(14)
      .text(u.username)
      .moveDown()
      .text(u.code)
      .moveDown()
      .text(date.getDay()+'/'+date.getMonth()+'/'+date.getFullYear())
      .moveDown()
      .moveDown();
    for (let i = 0; i<this.remarks.length; i++){
      let message = this.remarks[i];
      doc.font('Times-Bold')
        .fontSize(16)
        .text(message.title)
        .moveDown()
        .font('Times-Roman')
        .fontSize(14)
        .text(message.text)
        .moveDown()
        .moveDown();
    }
    doc.end();
    stream.on('finish', () =>{
      let blob: Blob = stream.toBlob('application/pdf');
      const curentTime = Date.now();
      saveAs(blob, 'result'+curentTime+'.pdf');
    });
  }

  private isTextArea(i): boolean{
    return this.currentQuestion.options[i].isTextArea;
  }

  private optionChecked(i): boolean{
    return this.optionsAnswered[i].checked;
  }

  private isAbierta(){
    return (this.currentQuestion.type==='abierta')? true : false;
  }

  private tipoOpcion(){
    return (this.currentQuestion.type==='unica')? 'radio' : 'checkbox';
  }

  private toggleSelect(i)  {
    let checked: boolean = this.optionsAnswered[i].checked;
    if (checked){
      this.optionsAnswered[i].checked = false;
    }
    else{
      this.optionsAnswered[i].checked = true;
      if (this.currentQuestion.options[i].message)
      {
        this.currentMessage = this.currentQuestion.options[i].message;
        this.isShowMessage = true;
      }
    }
  }

  private showMessage(){
  }

  private closeMessage(){
    this.isShowMessage = false;
  }

}
