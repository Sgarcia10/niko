import { Component, OnInit, NgZone, ElementRef,
  ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { Question, QuestionBasic, Category, Answer,
  Message, OptionAnswered, QuestionAsked } from '../../_models/index';
import { QuestionService, AnswerService, AlertService } from '../../_services/index';
import { types } from '../../_data/questionTypes';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterViewInit {

  @ViewChild('containerQuestion') elementView: ElementRef;
  private currentQuestion: Question = null;
  private currentPos: number;
  private  height;
  private margin: number;
  private available: boolean;
  private isShowMessage: boolean;
  private isShowResult: boolean;
  private currentMessage: Message = null;
  private optionsAnswered = [];
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
    this.available = false;
    this.height = window.innerHeight;
    this.isShowResult = false;
    this.isShowMessage = false;
    this.optionsAnswered = [];
    if ( this.answerService.answer) this.currentPos = this.answerService.answer.currentPos;
    else this.currentPos = 1;
    this.loadCurrentQuestion();
    this.getMargin();
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
      if (this.answerService.answer){
          this.questionService.getByPos(this.currentPos).subscribe(
            question => {
              if (!(question==='')){
                this.currentQuestion = question;
                this.loadAnswer();
                this.available = true;
              }
              else{
                this.isShowResult = true;
              }
            },
            err => this.router.navigate(['../'], { relativeTo: this.route })
          );
      }
      else  this.router.navigate(['../'], { relativeTo: this.route });

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
              let o: OptionAnswered = new OptionAnswered(option._id, option.text, false, 'a');
              this.optionsAnswered.push(o);
          }
      }

      let q: QuestionAsked = new QuestionAsked(
        this.currentQuestion._id,
        this.currentQuestion.title,
        this.currentQuestion.type,
        this.optionsAnswered);

      this.answerService.answer.questionsAsked.push(q);

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
    this.available = false;
    this.jump();
    this.loadCurrentQuestion();
    // this.answerService.create().subscribe(
    //   data => {
    //
    //   },
    //   err => {
    //      this.alertService.error(err);
    //   }
    // )
  }

  private jump(){
      let i = 0;
      let n = 0;
      for (let option of this.optionsAnswered)
      {
        if (option.checked)
        {
          if (this.currentQuestion.options[i].message){
            this.answerService.answer.remarks.push(option.message);
          }
          if (this.currentQuestion.options[i].jump>n){
            n = this.currentQuestion.options[i].jump;
          }
        }
        i++;
      }
      this.currentPos = this.currentPos+ n + 1;
  }

  private isTextArea(i){
    return this.currentQuestion.options[i].isTextArea;
  }

  private isAbierta(){
    return (this.currentQuestion.type==='abierta')? true : false;
  }

  private tipoOpcion(){
    return (this.currentQuestion.type==='unica')? 'radio' : 'checkbox';
  }

  private toggleSelect(i)  {
    // let selected = this.currentQuestion.options[i].selected;
    // if(selected)
    //   this.currentQuestion.options[i].selected=false;
    // else{
    //   this.currentQuestion.options[i].selected=true;
    //   if(this.currentQuestion.options[i].message)
    //   {
    //     this.currentMessage=this.currentQuestion.options[i].message;
    //     this.showMessage();
    //   }
    // }
  }

  private showMessage(){
    this.isShowMessage = true;
  }


  private closeResult(){
    this.isShowResult = false;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private closeMessage(){
    this.isShowMessage = false;
  }

}
