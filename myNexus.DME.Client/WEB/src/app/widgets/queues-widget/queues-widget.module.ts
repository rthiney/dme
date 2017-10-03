import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from './../../shared/smartadmin.module';
import { QueuesWidgetComponent } from './queues-widget.component';
import { DataTableModule, SharedModule, MultiSelectModule, SliderModule, DropdownModule, CheckboxModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    DataTableModule,   
    SharedModule,
    MultiSelectModule,
    DropdownModule,
    CheckboxModule
  ],
  declarations: [QueuesWidgetComponent],
  exports: [QueuesWidgetComponent]
})
export class QueuesWidgetModule { }
