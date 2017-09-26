import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabindingComponent } from './databinding/databinding.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatabindingComponent, TemplateDrivenComponent]
})
export class FormModule { }
