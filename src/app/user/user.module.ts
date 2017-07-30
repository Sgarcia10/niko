import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ProjectsComponent } from './projects/projects.component';
import { CustomHttpProvider } from '../_helpers/custom-http';

import { PopoverModule } from 'ngx-popover';

import { UserRoutingModule } from './user-routing.module';
import { QuestionComponent } from './question/question.component';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
     ProjectsComponent,
     QuestionComponent
   ],
   providers: [
     CustomHttpProvider,
   ]
})
export class UserModule { }
