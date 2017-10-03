import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummernoteAttachDirective } from './summernote-attach.directive'
import { SummernoteDetachDirective } from './summernote-detach.directive'
import { MarkdownEditorDirective } from './markdown-editor.directive'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SummernoteAttachDirective,
    SummernoteDetachDirective,
    MarkdownEditorDirective
  ],
  exports: [
    SummernoteAttachDirective,
    SummernoteDetachDirective,
    MarkdownEditorDirective
  ]
})
export class SmartadminEditorsModule { }
