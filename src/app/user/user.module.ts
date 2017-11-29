import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ProjectsComponent } from './projects/projects.component';
import { CustomHttpProvider } from '../_helpers/custom-http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PopoverModule } from 'ngx-popover';

import { UserRoutingModule } from './user-routing.module';
import { QuestionComponent } from './question/question.component';
import {  QuestionService, AnswerService, ProjectService, DialogService } from '../_services/index';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
     ProjectsComponent,
     QuestionComponent
   ],
   providers: [
     CustomHttpProvider,
     QuestionService,
     AnswerService,
     ProjectService,
     DialogService
   ]
})
export class UserModule { }
