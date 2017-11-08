import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CustomHttpProvider } from '../_helpers/custom-http';

import { AdminRoutingModule } from './admin-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SurveyComponent } from './survey/survey.component';

import { CategoryService, DialogService, QuestionService,
    SurveyService} from '../_services/index';
import { QuestionComponent } from './question/question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    ToolbarComponent,
    SurveyComponent,
    QuestionComponent
  ],
  providers: [
    CustomHttpProvider,
    DialogService,
    CategoryService,
    QuestionService,
    SurveyService
  ]
})

export class AdminModule { }
