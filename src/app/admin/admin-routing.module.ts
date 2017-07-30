import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { QuestionComponent } from './question/question.component';

import { AuthGuard }from '../_guards/auth-guard.service';

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
          { path: 'cuestionario', component: CuestionarioComponent },
          { path: 'cuestionario/question', component: QuestionComponent },
          { path: '', redirectTo:'cuestionario' }
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
