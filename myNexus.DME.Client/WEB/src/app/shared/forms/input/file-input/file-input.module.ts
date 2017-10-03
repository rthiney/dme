import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileInputComponent } from './file-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FileInputComponent],
  exports: [FileInputComponent]
})
export class FileInputModule { }
