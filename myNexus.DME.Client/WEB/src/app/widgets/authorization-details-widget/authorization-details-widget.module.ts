import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from './../../shared/smartadmin.module';
import { DataTableModule, SharedModule, DialogModule, InputTextareaModule
    , ButtonModule, DropdownModule, SplitButtonModule,Menubar
    , MenuItem } from 'primeng/primeng';
import { AuthorizationDetailsWidgetComponent } from './authorization-details-widget.component';
import {NotesModule} from '@app/notes/notes.module';
import {NotesComponent} from '@app/notes/notes.component';
import { DataService } from '@app/services/data.service';

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
	],
  declarations: [
    AuthorizationDetailsWidgetComponent
  ],
  providers: [DataService],
  exports: [AuthorizationDetailsWidgetComponent]
})
export class AuthorizationDetailsWidgetModule { }