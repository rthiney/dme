import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XEditableComponent } from './x-editable.component';

@NgModule({
  imports: [CommonModule],
  declarations: [XEditableComponent],
  exports: [XEditableComponent]
})
export class XEditableModule { }
