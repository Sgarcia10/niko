import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { DashboardService } from '../../_services/index';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Survey, Question } from '../../_models/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private surveys: Survey[];
  private questions: Question[];
  private currentSurveyId: string;
  private currentQuestionId: string;

  constructor(
    private dashboardService: DashboardService,
    private router: Router) { }

  ngOnInit() {
    this.surveys = [];
    this.questions= [];
    this.currentSurveyId = '';
    this.currentQuestionId = '';
    this.loadSurveys();
  }

  private loadSurveys()
  {
    this.dashboardService.getSurveys().subscribe(
      surveys => {
        this.surveys = surveys;
      },
      err => this.router.navigate(['/'])
    );
  }

  private loadQuestions()
  {
    this.dashboardService.getQuestions(this.currentSurveyId).subscribe(
      questions => {
        this.questions = questions;
      },
      err => this.router.navigate(['/'])
    );
  }

  private downloadSurveyAnswer(){
    let data = '';
    let blob: Blob = new Blob([data], {type: 'text/csv'});
    const currentTime = Date.now();
    saveAs(blob, 'answer'+currentTime+'.csv');
  }

}
