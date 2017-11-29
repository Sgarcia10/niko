import { Component, OnInit, AfterViewChecked, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Question, QuestionBasic, Option, Message,
  DownloadURL, Survey} from '../../_models/index';
import { QuestionService, AlertService, DialogService } from '../../_services/index';
import { types } from '../../_data/questionTypes';

declare const filestack: {
  init(apiKey: string): {
    pick({ maxFiles }: { maxFiles: number }):
      Promise<{ filesUploaded: { url: string }[] }>
  }
};

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterViewChecked {

  private uploadedFileUrls: string[] = [];
  // question :
  private isNew: boolean;

  questionForm: NgForm;
  @ViewChild('questionForm') currentForm: NgForm;


  formErrors = {
    'option1': '',
    'option2': '',
    'power': ''
  };

  validationMessages = {
    'option': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'power': {
      'required': 'Power is required.'
    }
  };

  private currentQuestion: Question;
  private pos: number;
  private types;
  private editable: boolean;
  private newOption: boolean;
  private optionSelected: number;
  private helping: boolean;
  private currentQuestionCategoria: Question;
  private update: boolean;
  private idSurvey: string;
  private currentSurvey: Survey;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: QuestionService,
    private alertService: AlertService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.currentSurvey = this.service.getCurrentSurvey();
    if (this.currentSurvey === null)
    {
      this.router.navigate(['../'], { relativeTo: this.route });
      return;
    }
    this.idSurvey = this.service.getCurrentSurvey()._id;
    this.pos = 0;
    this.types = types;
    this.editable = false;
    this.newOption = false;
    this.optionSelected = -1;
    this.helping = false;
    this.update = false;
    const questionBasic: QuestionBasic = this.service.getQuestionBasic();
    if (questionBasic)
    {
      this.pos = questionBasic.pos;
      this.currentQuestion = this.service.getQuestion();
      if (this.service.getQuestion()){
        this.update = true;
      }
      else
      {
        const category: string = null;
        const id = 0;
        const help = new Message ('', '', null);
          this.currentQuestion = new Question(
            '', this.idSurvey, '', 'abierta', [], null, '', ''
          );
      }
    }
    else this.router.navigate(['../'], { relativeTo: this.route });
  }

  private save(){

    if (this.currentQuestion.type === this.types[2].type || this.currentQuestion.type === this.types[3].type){
      this.currentQuestion.options = [];
    }
    this.service.setQuestion(this.currentQuestion);
    const questionBasic: QuestionBasic = this.service.getQuestionBasic();
    questionBasic.title = this.currentQuestion.title;
    this.service.setQuestionBasic(questionBasic);
    console.log(this.currentQuestion.idSurvey);
    if (!this.update){
      this.service.create().subscribe(
        data => {
          this.location.back();
        },
        err => {
            this.alertService.error(err);
        });
      }
    else{
        this.service.update().subscribe(
          data => {
            this.router.navigate(['../'], { relativeTo: this.route });
          },
          err => {
              this.alertService.error(err);
          });
    }
  }

  private cancel(){
    this.dialogService.confirm('Esta seguro de cancelar?')
      .then(res => {
        if (res){
          this.service.setQuestionBasic(null);
          this.location.back();
        }
      });
  }

  private deleteOption(j)
  {
      this.decreaseOptionsId(j);
      this.currentQuestion.options.splice(j, 1);
  }

  private addOption()
  {
      const size = this.currentQuestion.options.length;
      this.editable = true;
      this.newOption = true;
      this.optionSelected = size;
      const pos: number = ('a'.charCodeAt(0)) + size;
      const letra = String.fromCharCode(pos);
      const option = new Option(letra, '', -1, false, null);
      this.currentQuestion.options.push(option);
  }

  private editOption(i)
  {
      this.optionSelected = i;
      this.editable = true;
  }

  private acceptOption(i)
  {
      this.optionSelected = -1;
      this.editable = false;
      this.newOption = false;
  }

  private cancelOption(i)
  {
      this.optionSelected = -1;
      this.editable = false;
      if (this.newOption)
      {
        this.decreaseOptionsId(i);
        this.currentQuestion.options.splice(i, 1);
      }
  }

  private decreaseOptionsId(id)
  {
    for (let _i = id + 1; _i < this.currentQuestion.options.length; _i++) {
      const pos: number = ('a'.charCodeAt(0)) + ( _i - 1 );
      const letra = String.fromCharCode(pos);
      this.currentQuestion.options[_i]._id = letra;
    }
  }

  private isOptionEditable(i)
  {
     return this.optionSelected === i;
  }

  private toggleJump(i){
      if (this.currentQuestion.options[i].jump < 0){
          this.currentQuestion.options[i].jump = 1;
      }
      else{
          this.currentQuestion.options[i].jump = -1;
        }
  }

  // private toggleTextArea(i)
  // {
  //     if(this.currentQuestion.options[i].isTextArea)
  //         this.currentQuestion.options[i].isTextArea=false;
  //     else
  //       this.currentQuestion.options[i].isTextArea=true;
  // }

  // private toggleUploadURL(j)
  // {
  //     if(this.currentQuestion.options[j].message){
  //       if(this.currentQuestion.options[j].message.isUploadURL)
  //         this.currentQuestion.options[j].message.isUploadURL=false;
  //       else
  //         this.currentQuestion.options[j].message.isUploadURL=true;
  //     }
  // }

  private toggleMessage(i){
     const msg = this.currentQuestion.options[i].message;
     if (msg){
        this.currentQuestion.options[i].message = null;
    }
     else{
       this.currentQuestion.options[i].message = new Message('', '', null);
     }
  }
  private toggleHelp(){
     const msg = this.currentQuestion.help;
     if (msg){
        this.currentQuestion.help = null;
      }
     else{
       this.currentQuestion.help = new Message('', '', null);
     }
  }

  private isMessage(i){
      return (!(this.currentQuestion.options[i].message === null)) ? true : false;
  }

  private getMessageTitle(i){
      return this.currentQuestion.options[i].message.title;
  }

  private getMessageText(i){
      return this.currentQuestion.options[i].message.text;
  }

  private isSelectedType(i)
  {
      return this.currentQuestion.type === this.types[i].type;
  }

  private isTextBox(i)
  {
    // return (this.currentQuestion.options[i].textBox==="y")?true:false;
  }
  // private isUploadOption(i){
  //   if(this.isMessage(i))
  //     return (this.currentQuestion.options[i].message.uploadURL==="y")?true:false;
  //   else
  //   return false;
  // }

  // private uploadDoc(i)
  // {
  //     if(this.currentQuestion.options[i].message){
  //       if(this.currentQuestion.options[i].message.uploadURL==="y")
  //         this.currentQuestion.options[i].message.uploadURL="n";
  //       else this.currentQuestion.options[i].message.uploadURL="y";
  //     }
  // }


  private esAbierta()
  {
      return this.currentQuestion.type === this.types[2].type;
  }

  private esUnica()
  {
      return this.currentQuestion.type === this.types[0].type;
  }

  private esMultiple()
  {
      return this.currentQuestion.type === this.types[1].type;
  }

  private esCargar()
  {
      return this.currentQuestion.type === this.types[3].type;
  }

  private async downloadURL(i) {
    const client = filestack.init('AzQ6VeLs4QvmDxKFrY7N6z');
    const result = await client.pick({ maxFiles: 1 });
    const url = result.filesUploaded[0].url;
    if (url){
        this.currentQuestion.options[i].message.downloadURL = new DownloadURL(url, url);
      }
  }

  private async helpDownloadURL(i) {
    const client = filestack.init('AzQ6VeLs4QvmDxKFrY7N6z');
    const result = await client.pick({ maxFiles: 1 });
    const url = result.filesUploaded[0].url;
    if (url){
        this.currentQuestion.help.downloadURL = new DownloadURL(url, url);
      }
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.questionForm) return;
    this.questionForm = this.currentForm;
    if (this.questionForm){
      this.questionForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
      }
  }

  onValueChanged(data?: any) {
    if (!this.questionForm) return;
      const form = this.questionForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors){
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

}
