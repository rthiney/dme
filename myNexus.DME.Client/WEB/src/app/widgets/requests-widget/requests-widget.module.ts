import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from './../../shared/smartadmin.module';
import { RequestsWidgetComponent } from './requests-widget.component';
import { DataTableModule, SharedModule, TooltipModule, MultiSelectModule, SliderModule, DropdownModule, CheckboxModule } from 'primeng/primeng';
import { DataService } from '@app/services/data.service';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    DataTableModule,
    TooltipModule,
    SharedModule,
    MultiSelectModule,
    SliderModule,
    DropdownModule,
    CheckboxModule
  ],
  declarations: [RequestsWidgetComponent],
  providers: [DataService],
  exports: [RequestsWidgetComponent]
})
export class RequestsWidgetModule { }
