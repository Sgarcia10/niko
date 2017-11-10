import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './survey/survey.component';
import { QuestionComponent } from './question/question.component';
import { FindComponent } from './find/find.component';

import { AuthGuard } from '../_guards/auth-guard.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'survey', component: SurveyComponent },
          { path: 'survey/question', component: QuestionComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'find', component: FindComponent },
          { path: '', redirectTo: 'survey' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
