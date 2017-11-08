import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { ProjectsComponent } from './projects/projects.component';
import { QuestionComponent } from './question/question.component';


import { AuthGuard } from '../_guards/auth-guard.service';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'projects', component: ProjectsComponent },
          { path: 'projects/question', component: QuestionComponent },
          { path: '', redirectTo: 'projects' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule {}
