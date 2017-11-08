import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Inject } from '@angular/core';
import { Category, QuestionBasic, Question, Option,
  Survey, Message } from '../../_models/index';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService, AuthenticationService, AlertService,
  DialogService, QuestionService, SurveyService } from '../../_services/index';

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

  private updateSurvay()
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

  private editSurvey(i)
  {
      this.editingSurveyNo = i;
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
                    sur => {
                      this.loadAllSurveys();
                    },
                    err => this.alertService.error(err)
                  );
                }
            });
          }
        });
  }

  private selectSurvey(i){
    this.currentSurvey = this.surveys[i];
    this.loadCategoriesCurrentSurvey();
  }

  private selectSurveyById(id){
    for (let s of this.surveys){
      console.log(s._id);
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
    this.router.navigate(['./question', idCategory], { relativeTo: this.route });
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
            this.router.navigate(['./question', this.currentSurvey._id], { relativeTo: this.route });
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

}
