import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SmartadminFormsModule } from './forms/smartadmin-forms.module';
import { I18nModule } from './i18n/i18n.module';
import { SmartadminLayoutModule } from './layout'
import { SmartadminUiModule } from 'app/shared/ui/smartadmin-ui.module';
import { UtilsModule } from './utils/utils.module';
import { SmartadminWidgetsModule } from './widgets/smartadmin-widgets.module';

import { PopoverModule } from 'ngx-popover';
import {
  ModalModule,
  ButtonsModule,
  TooltipModule,
  BsDropdownModule,
  ProgressbarModule,
  AlertModule,
  TabsModule,
  AccordionModule,
  CarouselModule
} from 'ngx-bootstrap'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    SmartadminFormsModule,
    I18nModule,
    SmartadminLayoutModule,
    SmartadminUiModule,
    UtilsModule,
    SmartadminWidgetsModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    I18nModule,
    SmartadminFormsModule,
    SmartadminLayoutModule,
    SmartadminUiModule,
    UtilsModule,
    SmartadminWidgetsModule,

    ModalModule,
    ButtonsModule,
    TooltipModule,
    ProgressbarModule,
    AlertModule,
    TabsModule,
    AccordionModule,
    CarouselModule,
    PopoverModule
  ]
})
export class SmartadminModule { }
