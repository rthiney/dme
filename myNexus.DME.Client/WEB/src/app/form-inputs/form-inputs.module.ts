import { TestDatagridDropdownComponent } from './test-dropdown-datagrid/component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartadminModule } from '../shared/smartadmin.module';

import { FormInputsComponent } from './form-inputs.component';
import { fomrInputsRouting } from './form-inputs.routing';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    fomrInputsRouting
  ],
  declarations: [
    FormInputsComponent,
    TestDatagridDropdownComponent
  ]
})
export class FormInputsModule { }
