import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NotesService} from './notes.service';
import { DataTableModule, SharedModule, MultiSelectModule, SliderModule, DropdownModule, CheckboxModule, ButtonModule, DataTable, SelectItem, Tooltip } from 'primeng/primeng';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotesComponent implements OnInit {
  
  notes: any[];
  types: SelectItem[];
  selectedType: any;  
  
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getNotes(); 
    this.types = this.notesService.getTypes();
  }

}
