import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';


const routes: Routes = [
 
  {
    path: 'list',
    component: CandidatosListComponent
  },
  {
    path: ':id',
    component: CandidatosDetailComponent
  },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AuthorRoutingModule { }