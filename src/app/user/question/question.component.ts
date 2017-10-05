import { Component, OnInit, NgZone, ElementRef,
  ViewChild, AfterViewInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { QuestionDetail, Question, Category, Answer, Message } from '../../_models/index';
import { QuestionService, AnswerService } from '../../_services/index';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterViewInit {

  @ViewChild('containerQuestion') elementView: ElementRef
  private currentQuestion : QuestionDetail = null;
  private currentPos:number = -1;
  private  height;
  private margin : number;
  private init : boolean = false;
  private jump : number = 0;
  private isShowMessage : boolean =false;
  private isShowResult : boolean =false;
  private currentMessage : Message = null;

  constructor(
    private ngZone:NgZone,
    private questionService : QuestionService,
    private answerService : AnswerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    window.onresize = (e) =>
    {
        ngZone.run(() => {
            this.height = window.innerHeight;
            let size = this.height/2-90;
            if(this.elementView){
              let sizeElem = this.elementView.nativeElement.offsetHeight/2
              if(sizeElem>size)
              this.margin = 0;
              else
              this.margin = size-sizeElem;
            }
        });
    };
  }

  ngOnInit() {
    this.init = false;
    this.height = window.innerHeight;
    this.isShowResult =false;
    if( this.answerService.answer)
      this.currentPos = this.answerService.answer.currentPos;
    else
      this.currentPos = 0;
    this.loadCurrentQuestion();
    this.getMargin();
  }

  ngAfterViewInit(){
  }

  private getMargin()
  {
    let size = this.height/2-90;
    if(this.elementView){
      let sizeElem = this.elementView.nativeElement.offsetHeight/2
      if(sizeElem>size)
      return 0;
      else
      return size-sizeElem;
    }
    return 0;
  }


  private loadCurrentQuestion(){
      if(this.answerService.answer){
        if(this.answerService.answer.questions.length<this.currentPos){
          this.questionService.getByPos(this.currentPos).subscribe(
            question => {
              if(!(question==="")){
                this.currentQuestion = question;
                this.init=true;
              }
              else{

                console.log("FIN");
                this.isShowResult = true;
              }
            },
            err => this.router.navigate(['../'], { relativeTo: this.route })
          );
        }
        else{
          this.currentQuestion = this.answerService.answer.questions[this.currentPos-1];
        }
      }
      else  this.router.navigate(['../'], { relativeTo: this.route });

  }


  private anterior(){
      if(this.jump>0){
        this.currentPos = this.currentPos-this.jump-1;
      }
      else
        this.currentPos = this.currentPos-1;
        let long = this.answerService.answer.questions.length;
      this.currentQuestion = this.answerService.answer.questions[long-2];
      this.answerService.answer.questions.splice(this.currentPos-1,1);
      this.jump = 0;

  }

  private siguiente(){
    this.isJumping();
    if(this.jump>0){
      this.currentPos = this.currentPos+this.jump+1;
    }
    else{
      this.currentPos=this.currentPos+1;
    }
    if((this.currentPos===58)||(this.currentPos===11)){
        this.isShowResult = true;
      }
    else{
    this.answerService.answer.questions.push(this.currentQuestion);
    this.loadCurrentQuestion();
    }
  }

  private isJumping(){
    this.jump=0;
    for(let option of this.currentQuestion.options)
    {
      if(option.selected)
      {
        if(option.message)
          this.answerService.answer.remarks.push(option.message);
        if(option.jump>0)
          this.jump = option.jump;
      }
    }
  }

  private isAbierta(){
    return (this.currentQuestion.type==="abierta")? true : false;
  }

  private tipoOpcion(){
    return (this.currentQuestion.type==="unica")? "radio" : "checkbox";
  }

  private toggleSelect(i)  {
    let selected = this.currentQuestion.options[i].selected;
    if(selected)
      this.currentQuestion.options[i].selected=false;
    else{
      this.currentQuestion.options[i].selected=true;
      if(this.currentQuestion.options[i].message)
      {
        this.currentMessage=this.currentQuestion.options[i].message;
        this.showMessage();
      }
    }
  }

  private showMessage(){
    this.isShowMessage = true;
  }


  private closeResult(){
    this.isShowResult=false;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private closeMessage(){
    this.isShowMessage=false;
  }

}
