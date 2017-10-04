import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NotesService} from './notes.service';
//import { DataTableModule, SharedModule, MultiSelectModule, SliderModule, DropdownModule, CheckboxModule, ButtonModule, DataTable, SelectItem, Tooltip, OverlayPanel } from 'primeng/primeng';
import { DataTable, SelectItem, Tooltip, OverlayPanel } from 'primeng/primeng';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotesComponent implements OnInit {
  
  notes: any[];
  noteTypes: any[];
  selectedType: any;  
  selectedNote: any;
  currentNote: any;
  
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getNotes(); 
    this.notesService.getNoteTypes().subscribe((data) => {
      this.noteTypes = data.result;
      console.log(this.noteTypes);
    });   
  }

  selectNote(event, note: any, panel: OverlayPanel)
  {    
    this.selectedNote = note;
    panel.toggle(event);
  }

  saveNote()
  {
    console.log(this.selectedType);
    console.log(this.currentNote);
  }

}
