import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TabsModule,
  ProgressbarModule,
  TooltipModule,
  BsDropdownModule,
  AlertModule
} from 'ngx-bootstrap';

import { JsonApiService } from './api/json-api.service'
import { throwIfAlreadyLoaded } from './guards/module-import-guard';

import { LayoutService } from '../shared/layout/layout.service'
import { UserService } from '../shared/user/user.service'

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [],
  providers: [
    JsonApiService,
    LayoutService,
    UserService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
