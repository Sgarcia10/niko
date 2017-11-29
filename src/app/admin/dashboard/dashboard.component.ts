import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { DashboardService, AlertService } from '../../_services/index';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Survey, Question, QuestionAnswered } from '../../_models/index';

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
  private isDownloadable: boolean;

  constructor(
    private alertService: AlertService,
    private dashboardService: DashboardService,
    private router: Router) { }

  ngOnInit() {
    this.surveys = [];
    this.questions= [];
    this.currentSurveyId = '';
    this.currentQuestionId = '';
    this.isDownloadable = false;
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

  private downloadAllAnswers(){
    this.dashboardService.getAllAnswers().subscribe(
      ans => {
        const answers: QuestionAnswered [] = ans;
        if (answers==={}){
          this.alertService.success('No hay respuestas a la pregunta seleccionada');
        }
        else {
          let data = '';
          data += 'Pregunta No&';
          data += 'ID Encuesta&';
          data += 'ID Proyecto&';
          data += 'Títululo&';
          data += 'Tipo&';
          for (let i = 0; i<10; i++){
            data += 'Id Respuesta&';
            data += 'Texto Opcion&';
            data += 'Seleccionada&';
            data += 'Respuesta';
            if (i<10) data+='&';
          }
          data += '\n';
          for (let i = 0; i<answers.length; i++){
            const answer = answers[i];
            data += answer.posQuestion+'&';
            data += answer.idSurvey+'&';
            data += answer.idProject+'&';
            data += answer.title+'&';
            data += answer.type+'&';
            for (let j = 0; j<answer.optionsAnswered.length; j++){
              const optionAnswered = answer.optionsAnswered[j];
              data+=optionAnswered._id+'&'+optionAnswered.text+'&'+optionAnswered.checked+'&'+optionAnswered.ans;
              if (j<answer.optionsAnswered.length) data+='&';
            }
            if (i<answers.length) data+='\n';
          }
          let blob: Blob = new Blob([data], {type: 'text/csv'});
          const currentTime = Date.now();
          saveAs(blob, 'Answers'+currentTime+'.csv');
        }
      },
      err => this.alertService.error(err)
    );
  }

  private downloadAllProjects(){
    this.dashboardService.getAllAnswers().subscribe(
      ans => {
        const answers: QuestionAnswered [] = ans;
        if (answers.length===0){
          this.alertService.success('No hay respuestas a la pregunta seleccionada');
        }
        else {
          let data = '';
          for (let i = 0; i<answers.length; i++){
            const answer = answers[i];
            for (let j = 0; j<answer.optionsAnswered.length; j++){
              const optionAnswered = answer.optionsAnswered[j];
              data+=optionAnswered._id+'&'+optionAnswered.checked+'&'+optionAnswered.ans;
            }
            if (i<answer.optionsAnswered.length) data+='\n';
          }
          let blob: Blob = new Blob([data], {type: 'text/csv'});
          const currentTime = Date.now();
          saveAs(blob, 'Answers'+currentTime+'.csv');
        }
      },
      err => this.alertService.error(err)
    );
  }

  private downloadAllUsers(){
    this.dashboardService.getAllAnswers().subscribe(
      ans => {
        const answers: QuestionAnswered [] = ans;
        if (answers.length===0){
          this.alertService.success('No hay respuestas a la pregunta seleccionada');
        }
        else {
          let data = '';
          for (let i = 0; i<answers.length; i++){
            const answer = answers[i];
            for (let j = 0; j<answer.optionsAnswered.length; j++){
              const optionAnswered = answer.optionsAnswered[j];
              data+=optionAnswered._id+'&'+optionAnswered.checked+'&'+optionAnswered.ans;
            }
            if (i<answer.optionsAnswered.length) data+='\n';
          }
          let blob: Blob = new Blob([data], {type: 'text/csv'});
          const currentTime = Date.now();
          saveAs(blob, 'Answers'+currentTime+'.csv');
        }
      },
      err => this.alertService.error(err)
    );
  }

  private downloadSurveyAnswer(){
    this.dashboardService.getStats(this.currentQuestionId, this.currentSurveyId).subscribe(
      ans => {
        const answers: QuestionAnswered [] = ans;
        if (answers.length===0){
          this.alertService.success('No hay respuestas a la pregunta seleccionada');
          this.currentSurveyId = '';
          this.currentQuestionId = '';
          this.isDownloadable = false;
        }
        else {
          let data = '';
          for (let i = 0; i<answers.length; i++){
            const answer = answers[i];
            for (let j = 0; j<answer.optionsAnswered.length; j++){
              const optionAnswered = answer.optionsAnswered[j];
              data+=optionAnswered._id+'&'+optionAnswered.checked+'&'+optionAnswered.ans;
            }
            if (i<answer.optionsAnswered.length) data+='\n';
          }
          let blob: Blob = new Blob([data], {type: 'text/csv'});
          const currentTime = Date.now();
          saveAs(blob, 'answer'+currentTime+'.csv');
        }
      },
      err => this.alertService.error(err)
    );
  }

  private downloadable()
  {
    this.isDownloadable = true;
  }

}
