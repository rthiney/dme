import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioModule } from './../shared/forms/input/radio/radio.module';
import { MemberSearchInputComponent } from './member-search-input.component';
import { MemberSearchInputService } from './member-search-input.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RadioModule,
    FormsModule
  ],
  declarations: [MemberSearchInputComponent],
  providers: [MemberSearchInputService],
  exports: [MemberSearchInputComponent]
})
export class MemberSearchInputModule { }
