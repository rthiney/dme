import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from './../../shared/smartadmin.module';
import { AuthorizationsWidgetComponent } from './authorizations-widget.component';
import { DataTableModule, SharedModule, MultiSelectModule, SliderModule, DropdownModule, CheckboxModule } from 'primeng/primeng';
import { DataService } from '@app/services/data.service';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    DataTableModule,
    SharedModule,
    MultiSelectModule,
    SliderModule,
    DropdownModule,
    CheckboxModule
  ],
  declarations: [AuthorizationsWidgetComponent],
  providers: [DataService],
  exports: [AuthorizationsWidgetComponent]
})
export class AuthorizationsWidgetModule { }