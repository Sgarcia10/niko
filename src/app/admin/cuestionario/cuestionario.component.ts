import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Inject } from '@angular/core';
import { Category, Question } from '../../_models/index';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService, AuthenticationService, AlertService,
  DialogService, QuestionService } from '../../_services/index';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  categories: Category[] = [];
  private selectedPos: number;
  editable : boolean = false;
  newCategory : boolean = false;
  selectedOption : String = "cancelar";
  numOfQuestions : Array <number> = [];
  // questions = new Array<Question>();
  // cat = new Category('','', this.questions);

  constructor(
    private service: CategoryService,
    private questionService: QuestionService,
    private dialogService: DialogService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadAllCategories();
  }

  private loadAllCategories(){
    this.selectedPos = -1;
    this.numOfQuestions = [];
    this.questionService.question = null;
    this.questionService.questionDetail = null;
    this.questionService.idCategory = null;
    this.service.getAll().subscribe(
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
    if(category)
    {
      this.service.create(category).subscribe(
        data => {
          this.newCategory = false;
          this.selectedPos = -1;
          this.loadAllCategories();
        },
        err => {
            this.alertService.error(err);
        });
    }
  }

  private updateCategory(){
    let category = this.categories[this.selectedPos];
    if(category)
    {
      this.service.update(category).subscribe(
        data => {
          this.editable = false;
          this.selectedPos = -1;
          this.loadAllCategories();
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
          if(res)
          {
            let category: Category = this.categories[pos];
            if(category)
            {
              this.service.delete(category._id).subscribe(
                data => {
                  this.selectedPos = -1;
                  this.loadAllCategories();
                },
                err => {
                    this.alertService.error(err);
                });
            }
          }
      });
  }

  private editQuestion(i,j)
  {
      let question = this.categories[i].questions[j];
      let idCategory = this.categories[i]._id;
      if (question)
        this.questionService.getById(question.idQuestion).subscribe(
          data => {
            this.questionService.questionDetail = data;
            this.questionService.question = question;
            this.questionService.idCategory = idCategory;
            this.router.navigate(['./question'], { relativeTo: this.route });
          },
          err => {
              this.alertService.error(err);
          });
  }

  private save(){
    if(this.newCategory)
    {
      this.createCategory();
    }
    else if(this.editable)
    {
      this.updateCategory();
    }
  }

  private cancel(){
    if(this.newCategory)
    {
      this.categories.splice(this.selectedPos,1);
      this.newCategory = false;
    }
    else if(this.editable)
    {
      this.editable = false;
    }
    this.selectedPos = -1;
  }

  private isEditable(pos){
    return this.selectedPos===pos;
  }

  private edit(pos){
    this.editable = true;
    this.selectedPos = pos;
  }

  private addQuestion(i){
    let pos : number = this.numOfQuestions[i]+1;
    console.log(pos);
    this.questionService.idCategory = this.categories[i]._id;
    this.questionService.question = new Question('',pos,'');
    this.router.navigate(['./question'], { relativeTo: this.route });
  }

  private removeQuestion(i,j){
    this.dialogService.confirm('Esta seguro de eliminar la pregunta?')
      .then(res =>
        {
          if(res)
          {
            let question = this.categories[i].questions[j];
            if (question)
              this.questionService.delete(question).subscribe(
                  data => {
                    this.loadAllCategories();
                  },
                  err => {
                      this.alertService.error("No se pudo eliminar pregunta,  intentar en otro momento.");
                  });
          }
      });
  }

  private add()
  {
    this.newCategory = true;
    let cat = new Category('','',this.categories.length, []);
    this.selectedPos = this.categories.length;
    this.categories.push(cat);
  }

  private getZ(i)
  {
    return this.isEditable(i)? 2 : 0;
  }

  private getCursor(i)
  {
    return this.isEditable(i)? '' : 'pointer';
  }

  private isCollapsible(i)
  {
    return this.isEditable(i)? '' : 'collapse';
  }

}
