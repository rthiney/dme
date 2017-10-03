import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { I18nModule } from '../../i18n/i18n.module';
import { UserModule } from '../../user/user.module';

import { CollapseMenuComponent } from './collapse-menu/collapse-menu.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    I18nModule,
    UserModule
  ],
  declarations: [
    CollapseMenuComponent,
    FullScreenComponent,
    HeaderComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
