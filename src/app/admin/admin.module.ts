import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CustomHttpProvider } from '../_helpers/custom-http';

import { AdminRoutingModule } from './admin-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';

import { CategoryService, DialogService, QuestionService } from '../_services/index';
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
    CuestionarioComponent,
    QuestionComponent
  ],
  providers: [
    CustomHttpProvider,
    DialogService,
    CategoryService,
    QuestionService
  ]
})

export class AdminModule { }
