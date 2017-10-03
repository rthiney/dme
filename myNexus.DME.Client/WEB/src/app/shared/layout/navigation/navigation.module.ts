import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { I18nModule } from '../../i18n/i18n.module';

import { UserModule } from '../../user/user.module';
import { MemberSearchModule } from './../../../member-search/member-search.module';

import { BigBreadcrumbsComponent } from './big-breadcrumbs.component';
import { MinifyMenuComponent } from './minify-menu.component';
import { NavigationComponent } from './navigation.component';

import { SmartMenuDirective } from './smart-menu.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
    UserModule,
    MemberSearchModule
  ],
  declarations: [
    BigBreadcrumbsComponent,
    MinifyMenuComponent,
    NavigationComponent,
    SmartMenuDirective
  ],
  exports: [
    BigBreadcrumbsComponent,
    MinifyMenuComponent,
    NavigationComponent,
    SmartMenuDirective
  ]
})
export class NavigationModule { }
