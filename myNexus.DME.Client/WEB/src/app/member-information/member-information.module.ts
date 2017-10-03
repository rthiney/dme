import { MemberInformationService } from './member-information.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from '../shared/smartadmin.module';
import { memberInformationRouting } from './member-information.routing';
import { MemberInformationComponent } from './member-information.component';
import { MemberDetailsWidgetModule } from './../widgets/member-details-widget/member-details-widget.module';
import { RequestsWidgetModule } from './../widgets/requests-widget/requests-widget.module';
import { AuthorizationsWidgetModule } from './../widgets/authorizations-widget/authorizations-widget.module';
import { AuthorizationDetailsWidgetModule } from './../widgets/authorization-details-widget/authorization-details-widget.module';
import { DmeProductsWidgetModule } from './../widgets/dme-products-widget/dme-products-widget.module';
import { DynamicComponent } from './../helpers/dynamic-component/dynamic-component';
import {
	DataTableModule, SharedModule, DialogModule, ButtonModule
	, DropdownModule, CheckboxModule, CalendarModule
  , FileUploadModule, InputTextModule, InputTextareaModule
  , InputMaskModule, AutoCompleteModule
  } from 'primeng/primeng';
  import { DiagnosisService } from './../services/diagnosis.service';
  import {NotesModule} from '@app/notes/notes.module';
  import {NotesComponent} from '@app/notes/notes.component';
  import { DataService } from '@app/services/data.service';


@NgModule({
  imports: [
    CommonModule,
    memberInformationRouting,
    SmartadminModule,
    MemberDetailsWidgetModule,
    RequestsWidgetModule,
    AuthorizationsWidgetModule,

    AuthorizationDetailsWidgetModule,
    DmeProductsWidgetModule,

    SharedModule,
    DialogModule,
		DataTableModule,
	  ButtonModule,
	  DropdownModule,
	  CheckboxModule,
	  CalendarModule,
    FileUploadModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
    AutoCompleteModule
    
  ],
  declarations: [
    MemberInformationComponent,
    DynamicComponent
    
    
  ],
  providers: [MemberInformationService, DiagnosisService, DataService],
  exports: [MemberInformationComponent]
})
export class MemberInformationModule { 

}
