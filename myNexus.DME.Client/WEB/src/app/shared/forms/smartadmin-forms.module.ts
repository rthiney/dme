import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DropzoneModule } from './directives/dropzone/dropzone.module';
import { SmartadminEditorsModule } from './directives/editors/smartadmin-editors.module';
import { SmartadminInputModule } from './input/smartadmin-input.module';
import { SmartadminWizardsModule } from './wizards/smartadmin-wizards.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [],
  exports: [
    DropzoneModule,
    SmartadminEditorsModule,
    SmartadminInputModule,
    SmartadminWizardsModule
  ]
})
export class SmartadminFormsModule { }
