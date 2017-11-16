import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatRadioModule } from '@angular/material';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CustomHttpProvider } from '../_helpers/custom-http';

import { AdminRoutingModule } from './admin-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SurveyComponent } from './survey/survey.component';

import { CategoryService, DialogService, QuestionService,
    SurveyService, DashboardService} from '../_services/index';
import { QuestionComponent } from './question/question.component';
import { FindComponent } from './find/find.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    MatSelectModule,
    MatRadioModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    ToolbarComponent,
    SurveyComponent,
    QuestionComponent,
    FindComponent
  ],
  providers: [
    CustomHttpProvider,
    DialogService,
    CategoryService,
    QuestionService,
    SurveyService,
    DashboardService
  ]
})

export class AdminModule { }
