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
  private height: number;
  private margin: number;
  private available: boolean;
  private isShowingHelp: boolean;
  private isShowQuestion: boolean;
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
            // let size = (this.height/2)-90;
            // if (this.elementView){
            //   let sizeElem = this.elementView.nativeElement.offsetHeight/2;
            //   if (sizeElem > size) this.margin = 0;
            //   else this.margin = size-sizeElem;
            // }
        });
    };
  }

  ngOnInit() {
    if (this.answerService.getQuestionAnswered()){
      this.available = false;
      this.height = window.innerHeight;
      this.isShowResult = false;
      this.isShowMessage = false;
      this.isShowQuestion = false;
      this.remarks = [];
      this.margin = 50;
      this.currentQuestionAnswered = this.answerService.getQuestionAnswered();
      if (this.currentQuestionAnswered.posQuestion > 0){
        this.loadCurrentQuestion();
      }
      else{
        this.getResult();
      }
    }
    else  this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngAfterViewInit(){
    window.scrollTo(0, 0);
  }

  private getMargin()
  {
    setTimeout(() => {
      let size = window.innerHeight/2-90;
      if (this.elementView){
        let sizeElem = this.elementView.nativeElement.offsetHeight/2;
        // console.log('sizeElem: '+sizeElem);
        if (sizeElem>size) this.margin = 0;
        else this.margin = size-sizeElem;
      }
      else this.margin = 0;
      this.available = true;
    }, 0);
  }

  private helped(){
      this.isShowingHelp = false;
      this.isShowQuestion = true;
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
              else{
                this.optionsAnswered = this.currentQuestionAnswered.optionsAnswered;
              }
              this.isShowingHelp = this.currentQuestion.help? true : false;
              this.isShowQuestion = true && !this.isShowingHelp;
              this.getMargin();
            }
            else{
              this.finishProject();
            }
          },
          err => {
            this.finishProject();
          }
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
      this.getMargin();
  }

  private next(){
    this.isShowQuestion = false;
    let currentPos = this.currentQuestionAnswered.posQuestion;
    let nextPos = this.jump();
    let idProject = this.currentQuestionAnswered.idProject;
    let idSurvey = this.currentQuestionAnswered.idSurvey;
    this.answerService.setQuestionAnswered(this.currentQuestionAnswered);
    this.answerService.create().subscribe(
      data => {
        this.currentQuestionAnswered = new QuestionAnswered('', nextPos, '',
        idSurvey, idProject, currentPos, '', '', [], []);
        this.loadCurrentQuestion();
      },
      err => {
         this.alertService.error(err);
      }
    );
  }

  private jump(): number{
      let i = 0;
      let n = 0;
      if (this.currentQuestionAnswered.type !== types[3].type && this.currentQuestionAnswered.type !== types[2].type){
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
      }
      n = (n>0)? n : 1;
      return this.currentQuestionAnswered.posQuestion + n;
  }

  private back(){
    this.isShowQuestion = false;
    const id = this.currentQuestionAnswered._id;
    const prevPos = this.currentQuestionAnswered.prevPos;
    let idProject = this.currentQuestionAnswered.idProject;
    if (id !== ''){
      this.answerService.remove(id).subscribe(
        data => {
          this.loadAnswerByPos(prevPos, idProject);
        },
        err => {
           this.alertService.error(err);
        }
      );
    }
    else{
      this.loadAnswerByPos(prevPos, idProject);
    }
  }

  private loadAnswerByPos(pos, idProject){
    this.answerService.getByPos(pos, idProject).subscribe(
      answer => {
        this.currentQuestionAnswered = answer;
        this.loadCurrentQuestion();
      },
      err => {
         this.alertService.error(err);
      }
    );
  }

  private finishProject(){
    const idProject = this.currentQuestionAnswered.idProject;
    this.answerService.finishProject(idProject).subscribe(
      data => {
        // if (data._id==='-1') this.getResult();
        // else this.alertService.error('Intente terminar mas tarde');
        this.getResult();
      },
      err => {
         this.alertService.error(err);
      }
    );
  }

  private getResult(){
    const idProject = this.currentQuestionAnswered.idProject;
    this.answerService.getResult(idProject).subscribe(
      data => {
        const finalMessage = new Message('Esperamos que Niko le haya ayudado.', '', null);
        this.remarks = data;
        this.remarks.push(finalMessage);
        this.getMargin();
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
    if (this.currentQuestion.type==='unica'){
      for (let j = 0; j<this.optionsAnswered.length; j++){
        this.optionsAnswered[j].checked = false;
      }
      this.optionsAnswered[i].checked = true;
      if (this.currentQuestion.options[i].message)
      {
        this.showMessage(i);
      }
    }
    else{
      let checked: boolean = this.optionsAnswered[i].checked;
      if (checked){
        this.optionsAnswered[i].checked = false;
      }
      else{
        this.optionsAnswered[i].checked = true;
        if (this.currentQuestion.options[i].message)
        {
          this.showMessage(i);
        }
      }
    }
  }

  private validAbierta(): boolean{
      if (this.currentQuestion){
          if (this.currentQuestion.type==='abierta'){
              return (this.optionsAnswered[0].ans === '')? false : true;
          }
          return true;
      }
      else return false;
  }

  private validNoAbierta(): boolean{
      if (this.currentQuestion){
          if (this.currentQuestion.type!=='abierta'){
            let valid = false;
            for (let j = 0; j<this.optionsAnswered.length; j++){
              valid = valid || this.optionsAnswered[j].checked;
            }
            return valid;
          }
      }
      return false;
  }

  private showMessage(i){
    this.currentMessage = this.currentQuestion.options[i].message;
    this.isShowMessage = true;
    this.getMargin();
  }

  private closeMessage(){
    this.isShowMessage = false;
    this.getMargin();
  }

  private getCoverClass(){
    if (this.isShowResult) return {'container-cover-result': true};
    if (this.isShowMessage) return {'container-cover-message': true};
    return {'container-cover': true};
  }

}
