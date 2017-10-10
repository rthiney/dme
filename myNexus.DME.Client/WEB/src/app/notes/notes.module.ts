import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { FormsModule } from '@angular/forms';
import { DataTableModule, SharedModule, MultiSelectModule, SliderModule, DropdownModule, CheckboxModule,InputTextareaModule,ButtonModule, TooltipModule, OverlayPanelModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule,
    MultiSelectModule,
    SliderModule,
    DropdownModule,
    CheckboxModule,
    FormsModule,
    InputTextareaModule,
    OverlayPanelModule
  ],
  declarations: [NotesComponent],
  exports: [
    NotesComponent
  ]
})
export class NotesModule { }
