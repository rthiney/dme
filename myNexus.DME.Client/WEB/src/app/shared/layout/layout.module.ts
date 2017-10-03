import { SmartadminFormsModule } from './../forms/smartadmin-forms.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TooltipModule, BsDropdownModule } from 'ngx-bootstrap';

import { LayoutSwitcherComponent } from './layout-switcher.component';
import { MainLayoutComponent } from './app-layouts/main-layout.component';
import { NavigationModule } from './navigation/navigation.module';

import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { RouteBreadcrumbsComponent } from './ribbon/route-breadcrumbs.component';
import { ShortcutComponent } from './shortcut/shortcut.component';

import { UtilsModule } from '../utils/utils.module';
import { ToggleActiveDirective } from '../utils/toggle-active.directive';


@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    NavigationModule,
    FormsModule,
    RouterModule,
    UtilsModule,
    TooltipModule,
    BsDropdownModule,
		SmartadminFormsModule
  ],
  declarations: [
    FooterComponent,
    RibbonComponent,
    ShortcutComponent,
    LayoutSwitcherComponent,
    MainLayoutComponent,
    RouteBreadcrumbsComponent
  ],
  exports: [
    HeaderModule,
    NavigationModule,
    FooterComponent,
    RibbonComponent,
    ShortcutComponent,
    LayoutSwitcherComponent
  ]
})
export class SmartadminLayoutModule {}
