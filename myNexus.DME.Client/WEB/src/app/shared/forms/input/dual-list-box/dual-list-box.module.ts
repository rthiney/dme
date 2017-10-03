import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DualListBoxComponent } from './dual-list-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DualListBoxComponent],
  exports: [DualListBoxComponent]
})
export class DualListBoxModule { }
