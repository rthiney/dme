import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartadminModule } from './../shared/smartadmin.module';

import { queueListRouting } from './queue-list.routing';
import { QueueListComponent } from './queue-list.component';
import { DataTableModule, SharedModule, MultiSelectModule, SliderModule, DropdownModule, CheckboxModule } from 'primeng/primeng';
import { QueuesWidgetModule } from './../widgets/queues-widget/queues-widget.module';

@NgModule({
  imports: [
    CommonModule,
    queueListRouting,
    SmartadminModule,
    DataTableModule,
    SharedModule,
    MultiSelectModule,
    SliderModule,
    DropdownModule,
    CheckboxModule,
    QueuesWidgetModule
  ],
  declarations: [QueueListComponent]
})
export class QueueListModule { }
