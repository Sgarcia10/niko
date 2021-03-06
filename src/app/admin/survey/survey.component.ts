import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Inject } from '@angular/core';
import { Category, QuestionBasic, Question, Option,
  Survey, Message, CategoryFull } from '../../_models/index';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService, AuthenticationService, AlertService,
  DialogService, QuestionService, SurveyService } from '../../_services/index';
import blobStream from 'blob-stream';
import {saveAs} from 'file-saver';


@Component({
  selector: 'app-cuestionario',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  private categories: Category[] = [];
  private selectedPos: number;
  private editable: boolean;
  private newCategory: boolean;
  private selectedOption: string;
  private numOfQuestions: Array <number> = [];
  private surveys: Survey[] = [];
  private currentSurvey: Survey = null;
  private editingSurveyNo: number;
  // questions = new Array<Question>();
  // cat = new Category('','', this.questions);

  constructor(
    private surveyService: SurveyService,
    private categoryService: CategoryService,
    private questionService: QuestionService,
    private dialogService: DialogService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.editable = false;
    this.newCategory = false;
    this.selectedOption = 'cancelar';
    this.editingSurveyNo = -1;
    this.questionService.setCurrentSurvey(null);
    this.loadAllSurveys();
    this.router.events.subscribe((evt) => {
            window.scrollTo(0, 0);
        });
  }

  private isEditing()
  {
      return (this.editingSurveyNo > -1) ? true : false;
  }
  /////////////////////////////////////////////
  ///////////////// Survey ////////////////////
  /////////////////////////////////////////////

  private loadAllSurveys(){
    this.surveys = [];
    this.editingSurveyNo = -1;
    this.surveyService.getAll().subscribe(
      surveys => {
        this.surveys = surveys;
        const updatedQuestion: Question = this.questionService.getQuestion();
        if (updatedQuestion)
        {
          this.selectSurveyById(updatedQuestion.idSurvey);
        }
      },
      err => this.router.navigate(['/'])
    );
  }

  private isShowingSurveys()
  {
    return (this.currentSurvey === null);
  }

  private isEditingSurvey(i){
    return (i === this.editingSurveyNo);
  }

  private getZSurvey(i)
  {
    return this.isEditingSurvey(i) ? 2 : 0;
  }

  private getCursorSurvey(i)
  {
    return this.isEditingSurvey(i) ? '' : 'pointer';
  }

  private isCollapsibleSurvey(i)
  {
    return this.isEditingSurvey(i) ? '' : 'collapse';
  }

  private addSurvey()
  {
    const survey = new Survey('', '', false, false);
    this.editingSurveyNo = this.surveys.length;
    this.surveys.push(survey);
  }

  private updateSurvey()
  {
      const survey = this.surveys[this.editingSurveyNo];
      if (survey)
      {
        this.surveyService.update(survey).subscribe(
          data => {
            this.loadAllSurveys();
          },
          err => {
              this.alertService.error(err);
          });
      }
  }

  private deleteSurvey(i)
  {
    this.dialogService.confirm('Esta seguro de eliminar el custionario?')
      .then(res1 =>
        {
          if (res1){
          this.dialogService.confirm('También se eliminaran todas las respuestas realizadas')
            .then(res2 =>
              {
                if (res2){
                  const survey = this.surveys[i];
                  this.surveyService.delete(survey._id).subscribe(
                    surv => {
                      this.loadAllSurveys();
                    },
                    err => this.alertService.error(err)
                  );
                }
            });
          }
        });
  }

  private activate(i)
  {
      const survey: Survey = this.surveys[i];
      if (survey.finished){
        const active: boolean = (survey.active)? false: true;
        this.surveyService.activate(survey._id, active).subscribe(
          sur => {
              this.surveys[i].active = sur.active;
              console.log(this.surveys[i].active);
          },
          err => this.alertService.error(err)
        );
      }
      else{
        this.alertService.error('La encuesta no ha sido finalizada, por lo tanto, no se puede activar');
      }
  }

  private finish(i)
  {
    this.dialogService.confirm('Esta seguro de completar el custionario? Recuerde que despues no podrá modificar las preguntas')
      .then(res1 =>
        {
          if (res1){
            const survey: Survey = this.surveys[i];
            this.surveyService.finish(survey._id).subscribe(
              sur => {
                this.loadAllSurveys();
              },
              err => this.alertService.error(err)
            );
          }
        });
  }

  private cloneSurvey(i)
  {
      const survey: Survey = this.surveys[i];
      this.surveyService.clone(survey).subscribe(
        sur => {
          this.loadAllSurveys();
        },
        err => this.alertService.error(err)
      );
  }

  private editSurvey(i){
    this.editingSurveyNo = i;
  }

  private downloadSurvey(i)
  {
      const survey = this.surveys[i];
      const idSurvey = survey._id;
      let doc = new PDFDocument();
      let stream = doc.pipe(blobStream());
      doc.font('Times-Roman')
        .fontSize(20)
        .text(survey.name, {
          align: 'center'})
        .moveDown()
        .fontSize(18)
        .text(survey._id, {
          align: 'center'})
       .moveDown();
      this.surveyService.getRedable(idSurvey).subscribe(
        cats => {
          let categories: CategoryFull[] = cats;
          let n = 1;
          for (let cat of categories) {
              doc.font('Times-Roman')
                .moveDown()
                .fontSize(17)
                .text(cat.name, {
                  align: 'justify'});
              for (let question of cat.questions) {
                  doc.font('Times-Roman')
                    .fontSize(12)
                    .text((n) + '.  ' + question.title, {
                      align: 'justify',
                      indent: 10});
                  for (let option of question.options) {
                    doc.font('Times-Roman')
                      .fontSize(12)
                      .text(option._id+'. '+option.text, {
                        align: 'justify',
                        indent: 30});
                  }
                  n++;
              }
          }
          doc.end();
        },
        err => this.alertService.error(err)
      );
      stream.on('finish', () =>{
        let blob: Blob = stream.toBlob('application/pdf');
        const curentTime = Date.now();
        saveAs(blob, 'survey'+curentTime+'.pdf');
      });
  }

  private writePdf(doc, id){
    this.categoryService.getBySurveyId(id).subscribe(
      data => {
        let categories = data;
      },
      err => this.router.navigate(['/'])
    );
  }

  private cancelEditingSurvey()
  {
      this.editingSurveyNo = -1;
  }

  private selectSurvey(i){
    this.currentSurvey = this.surveys[i];
    this.loadCategoriesCurrentSurvey();
  }

  private selectSurveyById(id){
    for (let s of this.surveys){
      // console.log(s._id);
      if (s._id === id){
        this.currentSurvey = s;
        this.loadCategoriesCurrentSurvey();
        break;
      }
    }
  }
  /////////////////////////////////////////////
  ///////////////// Category //////////////////
  /////////////////////////////////////////////

  private loadCategoriesCurrentSurvey(){
    this.selectedPos = -1;
    this.numOfQuestions = [];
    this.questionService.setQuestion(null);
    this.questionService.setQuestionBasic(null);
    this.questionService.setCurrentSurvey(this.currentSurvey);
    this.categoryService.getBySurveyId(this.currentSurvey._id).subscribe(
      categories => {
        this.categories = categories;
        this.loadNumOfQuestions();
      },
      err => this.router.navigate(['/'])
    );
  }

  private loadNumOfQuestions(){
    let sum = 0;
    for (let category of this.categories) {
        sum = sum + category.questions.length;
        this.numOfQuestions.push(sum);
    }
  }

  private createCategory(){
    let category = this.categories[this.selectedPos];
    if (category)
    {
      this.categoryService.create(category).subscribe(
        data => {
          this.newCategory = false;
          this.selectedPos = -1;
          this.loadCategoriesCurrentSurvey();
        },
        err => {
            this.alertService.error(err);
        });
    }
  }

  private updateCategory(){
    let category = this.categories[this.selectedPos];
    if (category)
    {
      this.categoryService.update(category).subscribe(
        data => {
          this.editable = false;
          this.selectedPos = -1;
          this.loadCategoriesCurrentSurvey();
        },
        err => {
            this.alertService.error(err);
        });
    }
  }

  private delete(pos){
    this.dialogService.confirm('Esta seguro de eliminar la categoria?')
      .then(res =>
        {
          if (res)
          {
            const category: Category = this.categories[pos];
            if (category)
            {
              this.categoryService.delete(category._id).subscribe(
                data => {
                  this.selectedPos = -1;
                  this.loadCategoriesCurrentSurvey();
                },
                err => {
                    this.alertService.error(err);
                });
            }
          }
      });
  }

  private addQuestion(i){
    let pos: number = this.numOfQuestions[i] + 1;
    const idCategory = this.categories[i]._id;
    const questionBasic = new QuestionBasic('', pos, '', idCategory);
    this.questionService.setQuestionBasic(questionBasic);
    this.router.navigate(['./question'], { relativeTo: this.route });
  }

  private editQuestion(i, j)
  {
      const questionBasic = this.categories[i].questions[j];
      const idCategory = this.categories[i]._id;
      if (questionBasic){
        this.questionService.getById(questionBasic.idQuestion).subscribe(
          question => {
            this.questionService.setQuestion(question);
            this.questionService.setQuestionBasic(questionBasic);
            this.router.navigate(['./question'], { relativeTo: this.route });
          },
          err => {
              this.alertService.error(err);
          });
      }
  }

  private save(){
    if (this.newCategory)
    {
      this.createCategory();
    }
    else if (this.editable)
    {
      this.updateCategory();
    }
  }

  private cancel(){
    if (this.newCategory)
    {
      this.categories.splice(this.selectedPos, 1);
      this.newCategory = false;
    }
    else if (this.editable)
    {
      this.editable = false;
    }
    this.selectedPos = -1;
  }

  private isEditable(pos){
    return this.selectedPos === pos;
  }

  private edit(pos){
    this.editable = true;
    this.selectedPos = pos;
  }

  private removeQuestion(i, j){
    this.dialogService.confirm('Esta seguro de eliminar la pregunta?')
      .then(res =>
        {
          if (res)
          {
            let question = this.categories[i].questions[j];
            if (question){
              this.questionService.delete(question.idQuestion, question.pos).subscribe(
                  data => {
                    this.loadCategoriesCurrentSurvey();
                  },
                  err => {
                      this.alertService.error('No se pudo eliminar pregunta,  intentar en otro momento.');
                  });
            }
          }
      });
  }

  private add()
  {
    this.newCategory = true;
    let cat = new Category('', '', this.categories.length, [], this.currentSurvey._id);
    this.selectedPos = this.categories.length;
    this.categories.push(cat);
  }

  private getZ(i)
  {
    return this.isEditable(i) ? 2 : 0;
  }

  private getCursor(i)
  {
    return this.isEditable(i) ? '' : 'pointer';
  }

  private isCollapsible(i)
  {
    return this.isEditable(i) ? '' : 'collapse';
  }

  private returnSurveys()
  {
    this.currentSurvey = null;
  }

}
