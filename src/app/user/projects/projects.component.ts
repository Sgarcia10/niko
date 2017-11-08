import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Answer, Project, Period, UserProject } from '../../_models/index';
import { AnswerService, ProjectService, AlertService } from '../../_services/index';
import { carreras } from './carreras';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private carreras = carreras;
  private year ;
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
    this.newProject = true;
    this.projects = [];
    let u = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = new UserProject(u._id, u.username, u.code);
    this.projectService.currentProject = null;
    console.log(this.currentUser);
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
            if (!data) this.newProject = true;
            else{
              this.newProject = false;
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
            this.answerService.answer = new Answer('', data._id, 1, [], []);
            this.router.navigate(['./question'], { relativeTo: this.route });
        },
        err => {
            this.alertService.error(err);
        });
  }

  private start()
  {
      this.newProject = false;
      this.currentProject = new Project('', '', '', '', 'individual', '',
        new Period(2018, 1), '', this.currentUser);
      window.scrollTo(0, 0);
  }

}
