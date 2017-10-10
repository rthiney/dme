import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from './../../shared/smartadmin.module';
import { DataTableModule, SharedModule, DialogModule, InputTextareaModule
    , ButtonModule, DropdownModule, SplitButtonModule,Menubar, InputTextModule
    , MenuItem } from 'primeng/primeng';
import { AuthorizationDetailsWidgetComponent } from './authorization-details-widget.component';
import {NotesModule} from '@app/notes/notes.module';
import {NotesComponent} from '@app/notes/notes.component';
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
  ,NotesModule
  , InputTextModule
	],
  declarations: [
    AuthorizationDetailsWidgetComponent
  ],
  providers: [DataService, UserService],
  exports: [AuthorizationDetailsWidgetComponent]
})
export class AuthorizationDetailsWidgetModule { }