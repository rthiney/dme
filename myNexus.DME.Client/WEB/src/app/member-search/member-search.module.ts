import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberSearchComponent } from './member-search.component';
import { MemberSearchInputModule } from './../member-search-input/member-search-input.module';

@NgModule({
  imports: [CommonModule, MemberSearchInputModule],
  declarations: [MemberSearchComponent],
  exports: [MemberSearchComponent]
})
export class MemberSearchModule { }
