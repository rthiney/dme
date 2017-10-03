import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from './../../shared/smartadmin.module';
import { MemberDetailsWidgetComponent } from './member-details-widget.component';
import { DataTableModule, SharedModule, DialogModule, InputTextareaModule
  , ButtonModule, DropdownModule } from 'primeng/primeng';
import { DataService } from '@app/services/data.service';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    InputTextareaModule,
    ButtonModule,
    DropdownModule
  ],
  declarations: [MemberDetailsWidgetComponent],
  providers: [DataService],
  exports: [MemberDetailsWidgetComponent]
})
export class MemberDetailsWidgetModule { }
