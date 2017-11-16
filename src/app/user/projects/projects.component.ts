import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { QuestionAnswered, Project, Period, UserProject, Survey } from '../../_models/index';
import { AnswerService, ProjectService, AlertService,
  DialogService} from '../../_services/index';
import { carreras } from './carreras';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private carreras = carreras;
  private year ;
  private noProjects: boolean;
  private newProject: boolean;
  private height: number;
  private currentProject: Project;
  private currentUser: UserProject;
  private projects: Project[] = [];

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private route: ActivatedRoute,
    private answerService: AnswerService,
    private projectService: ProjectService,
    private dialogService: DialogService,
    private alertService: AlertService) {
    window.onresize = (e) =>
    {
        ngZone.run(() => {
            this.height = window.innerHeight;
        });
    };
  }

  ngOnInit() {

    this.height = window.innerHeight;
    window.scrollTo(0, 0);
    let year: number = new Date().getFullYear();
    this.year = year;
    this.noProjects = true;
    this.newProject = false;
    this.projects = [];
    let u = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = new UserProject(u._id, u.username, u.code);
    this.projectService.currentProject = null;
    this.getProjects();

  }

  private getMargin(){
    if (this.height < 630) return -10;
    return (this.height / 2) - 370;
  }

  private firstTime(){
    return true;
  }

  private getProjects()
  {
      this.projectService.getByUserId(this.currentUser.userId)
      .subscribe(
        data => {
            if (data.length === 0) {
              this.noProjects = true;
              this.projects = [];
            }
            else{
              this.noProjects = false;
              this.projects = data;
            }
        },
        err => {
            this.alertService.error(err);
        });
  }

  private saveProject()
  {
      this.projectService.create(this.currentProject).subscribe(
        data => {
            const idSurvey = this.currentProject.idSurvey;
            this.answerService.setQuestionAnswered(
              new QuestionAnswered('', 1, idSurvey, data._id, 0, '', '', [], []));
            this.router.navigate(['./question'], { relativeTo: this.route });
        },
        err => {
            this.alertService.error(err);
        });
  }

  private add()
  {
    let survey: Survey = null;
    this.projectService.getActiveSurvey()
      .subscribe(
        data => {
            survey = data;
            if (survey){
              this.newProject = true;
              this.currentProject = new Project('', survey._id, 1, '', '', '', 'individual', '',
                new Period(2018, 1), '', this.currentUser);
              window.scrollTo(0, 0);
            }
            else{
              this.alertService.error('Actualmente no hay encuestas disponibles');
            }
        },
        err => {
            this.alertService.error(err);
        }
      );
  }

  private delete(i){
    this.dialogService.confirm('Esta seguro de eliminar el proyecto?')
      .then(res =>
        {
          if (res){
            const project: Project = this.projects[i];
            this.projectService.delete(project._id)
            .subscribe(
              data => {
                  this.getProjects();
              },
              err => {
                  this.alertService.error(err);
              }
            );
          }
        });
  }

  private continue(i){
  }

}
