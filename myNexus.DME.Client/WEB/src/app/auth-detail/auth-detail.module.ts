import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authDetailRouting } from './auth-detail.routing';
import { DataTableModule, SharedModule, DialogModule, InputTextareaModule, ButtonModule, DropdownModule, SplitButtonModule,Menubar, MenuItem } from 'primeng/primeng';
import { AuthDetailComponent } from './auth-detail.component';
import { SmartadminModule } from '../shared/smartadmin.module';
import { MemberDetailsWidgetModule } from './../widgets/member-details-widget/member-details-widget.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule
    ,authDetailRouting  
  ,SmartadminModule
  ,DataTableModule
  ,SharedModule
  ,DialogModule
  ,InputTextareaModule
  ,ButtonModule
  ,SplitButtonModule
  ,DropdownModule
  ,AccordionModule.forRoot()
  ,MemberDetailsWidgetModule
	],
  declarations: [
    AuthDetailComponent
  ]
})
export class AuthDetailModule { }

