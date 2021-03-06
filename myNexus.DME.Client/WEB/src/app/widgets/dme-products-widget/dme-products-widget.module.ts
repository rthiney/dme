import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from './../../shared/smartadmin.module';
import { DataTableModule, SharedModule, DialogModule, InputTextareaModule
    , ButtonModule, DropdownModule, SplitButtonModule,Menubar
    , MenuItem } from 'primeng/primeng';
import { DmeProductsWidgetComponent } from './dme-products-widget.component';
import { DataService } from '@app/services/data.service';
import { UserService } from '@app/shared/user/user.service';

@NgModule({
  imports: [
    CommonModule
    , SmartadminModule
  ,DataTableModule
  ,SharedModule
  ,DialogModule
  ,InputTextareaModule
  ,ButtonModule
  ,SplitButtonModule
  ,DropdownModule
	],
  declarations: [
    DmeProductsWidgetComponent
  ],
  providers: [DataService, UserService],
  exports: [DmeProductsWidgetComponent]
})
export class DmeProductsWidgetModule { }
