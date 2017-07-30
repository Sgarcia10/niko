import { Component, OnInit, AfterViewChecked, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Question, QuestionDetail, Option, Message, DownloadURL} from '../../_models/index';
import { QuestionService, AlertService, DialogService } from '../../_services/index';

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

  uploadedFileUrls: string[] = [];
  // question :
  isNew : boolean = false;

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

  pregunta : QuestionDetail;
  pos : number = 0;
  types : Array<any> = [
    {'type':'unica', 'text':'Unica'},
    {'type':'multiple', 'text':'Multiple'},
    {'type':'abierta', 'text':'Abierta'}];
  editable : boolean = false;
  newOption : boolean = false;
  optionSelected : number = -1;
  helping : boolean = false;
  preguntaCategoria : Question;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: QuestionService,
    private alertService : AlertService,
    private dialogService : DialogService
  ) { }

  ngOnInit() {
    if(this.service.question && this.service.idCategory)
    {
      if(this.service.questionDetail){
        console.log(this.service.questionDetail); 
          this.pregunta = this.service.questionDetail;
        }
      else{
        this.pos = this.service.question.pos;
        let category : string = null;
        let id = 0;
        let help = new Message ('','','',null,false);
          this.pregunta = new QuestionDetail(
            '', '', 'abierta', [], null
          );
      }
    }
    else{
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }

  private save(){

    this.service.question.title = this.pregunta.title;
    this.service.create(this.pregunta).subscribe(
      data => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      err => {
          this.alertService.error(err);
      });
  }

  private cancel(){
    this.dialogService.confirm('Esta seguro de cancelar?')
      .then(res =>{
        if(res){
          this.service.question = null;
          this.service.idCategory = null;
          this.router.navigate(['../'], { relativeTo: this.route });
        }
      });
  }

  private deleteOption(j)
  {
      this.decreaseOptionsId(j);
      this.pregunta.options.splice(j,1);
  }

  private addOption()
  {
      let size =this.pregunta.options.length;
      this.editable = true;
      this.newOption = true;
      this.optionSelected = size;
      let pos : number = ('a'.charCodeAt(0))+size;
      let letra = String.fromCharCode(pos);
      let option = new Option(letra,'',-1, false, null);
      this.pregunta.options.push(option);
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
      if(this.newOption)
      {
        this.decreaseOptionsId(i);
        this.pregunta.options.splice(i,1);
      }
  }

  private decreaseOptionsId(id)
  {
    for (let _i = id+1; _i < this.pregunta.options.length; _i++) {
      let pos : number = ('a'.charCodeAt(0))+(_i-1);
      let letra = String.fromCharCode(pos);
      this.pregunta.options[_i]._id=letra;
    }
  }

  private isOptionEditable(i)
  {
     return this.optionSelected===i;
  }

  private toggleJump(i){
      if(this.pregunta.options[i].jump <0){
          this.pregunta.options[i].jump = 1;
      }
      else{
          this.pregunta.options[i].jump = -1;
      }
  }

  private toggleMessage(i){
     let msg = this.pregunta.options[i].message;
     if(msg)
     {
        this.pregunta.options[i].message=null;
     }
     else{
       this.pregunta.options[i].message = new Message('','','', null, false);
     }
  }
  private toggleHelp(){
     let msg = this.pregunta.help;
     if(msg)
     {
        this.pregunta.help=null;
     }
     else{
       this.pregunta.help = new Message('','','', null, false);
     }
  }

  private isMessage(i){
      return (this.pregunta.options[i].message)?true:false;
  }

  private isSelectedType(i)
  {
      return this.pregunta.type===this.types[i].type;
  }

  private esAbierta()
  {
      return this.pregunta.type===this.types[2].type;
  }

  private esUnica()
  {
      return this.pregunta.type===this.types[0].type;
  }

  private esMultiple()
  {
      return this.pregunta.type===this.types[1].type;
  }

  private async downloadURL(i) {
    const client = filestack.init('AzQ6VeLs4QvmDxKFrY7N6z');
    const result = await client.pick({ maxFiles: 1 });
    const url = result.filesUploaded[0].url;
    if(url)
    {
        this.pregunta.options[i].message.downloadURL = new DownloadURL(url,url);
    }
  }

  private async helpDownloadURL(i) {
    const client = filestack.init('AzQ6VeLs4QvmDxKFrY7N6z');
    const result = await client.pick({ maxFiles: 1 });
    const url = result.filesUploaded[0].url;
    if(url)
    {
        this.pregunta.help.downloadURL = new DownloadURL(url,url);
    }
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.questionForm) { return; }
    this.questionForm = this.currentForm;
    if (this.questionForm) {
      this.questionForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.questionForm) { return; }
    const form = this.questionForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

}
