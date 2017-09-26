import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { DatabindingComponent } from './form/databinding/databinding.component';
import { TemplateDrivenComponent } from './form/template-driven/template-driven.component';

const appRoutes: Routes = [
  { path: 'dataBinding', component: DatabindingComponent },
  { path: 'templateDriven', component: TemplateDrivenComponent },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
    data: { title: 'Messenger' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
