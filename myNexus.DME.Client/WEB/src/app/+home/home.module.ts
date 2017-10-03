import { MemberDetailsWidgetModule } from './../widgets/member-details-widget/member-details-widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartadminModule } from '../shared/smartadmin.module';

import { homeRouting } from './home.routing';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    SmartadminModule,
    MemberDetailsWidgetModule
  ],
  declarations: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule { }
