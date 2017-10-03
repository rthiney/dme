import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartadminDatatableModule } from './datatable/smartadmin-datatable.module';
import { SmartadminGalleryModule } from './gallery/gallery.module';
import { JqueryUiModule } from './jquery-ui/jquery-ui.module';
import { NestableListModule } from './nestable-list/nestable-list.module';
import { SmartProgressbarModule } from './smart-progressbar/smart-progressbar.module';
import { TreeViewModule } from './tree-view/tree-view.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    SmartadminDatatableModule,
    SmartadminGalleryModule,
    JqueryUiModule,
    NestableListModule,
    SmartProgressbarModule,
    TreeViewModule
  ]
})
export class SmartadminUiModule { }
