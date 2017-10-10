import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NotesService} from './notes.service';
import { DataService } from '../services/data.service';
import {DataTable, SelectItem, Tooltip, OverlayPanel, DataTableModule, SharedModule, MultiSelectModule, SliderModule
	, DropdownModule, CheckboxModule, ButtonModule } from 'primeng/primeng';
import { DatePipe } from '@angular/common';
import { AuthorizationNote } from '@app/entities/dtos/authorization-note';
import { AccountSessionManager } from './../helpers/account-session-manager';
import { UserSessionManager } from './../helpers/user-session-manager';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotesComponent implements OnInit {
  authorizationNote = new AuthorizationNote;
  
  notes: any[];
  notesTemp: any[];
  noteTypes: any[];  
  selectedType: any;  
  selectedNote: any;
  currentNote: any;
  encodedAccountId: any;
  encodedAuthorizationId: any;
  selectedRecordId: any;
  showSpinner = false;
  sessionManager:AccountSessionManager;
  userFullName: any;
  userID: any;
  authorizationId: string;
  
  constructor(private notesService: NotesService, private dataService: DataService) { }

  ngOnInit() {
    this.authorizationId = 'B5D1C194-B4AC-4607-BAA9-E8EE251A8C53';                                // todo: pull from data service 
    this.encodedAuthorizationId = encodeURIComponent('' + this.authorizationId);   
    this.encodedAccountId = encodeURIComponent('' + AccountSessionManager.getAccountID());
    
    this.getUserInfo();  
    this.getNoteTypes();
    this.getNotes();    
  }

  getUserInfo(){
    let userSession = UserSessionManager.getUserSession();
    let user = userSession.user;        
    this.userID = user.userID;
  }

  getNoteTypes(){
    this.notesService.getNoteTypes().subscribe((data) => {
      this.noteTypes = data.result;      
    }); 
  }

getNotes(){                                                                                     // todo: port this logic to data service click event
    let parameters = '?accountId='+ this.encodedAccountId +'&authorizationId=' + encodeURIComponent('' + this.authorizationId);
    this.notesService.getNotes('api/AuthorizationNotes/CreateAuthorizationNotesAsync', parameters ).subscribe((data) => {
      this.notes = data.result; 
      this.notes.sort((b, a) => a.noteDate < b.noteDate ? -1 : a.noteDate > b.noteDate ? 1 : 0);      
    });      
   
  }

  getNoteTypeNameById(noteTypeId: string){        
    return this.noteTypes.find(note => note.noteTypeID == noteTypeId).noteType;    
  }

  selectTypeID(type: any){
    this.selectedType = type.value;
  }

  selectNote(event, note: any, panel: OverlayPanel)
  {    
    this.selectedNote = note;
    panel.toggle(event);
  }  

  saveNote()
  {
    console.log(this.authorizationId);
    console.log(this.currentNote);
    console.log(this.dataService.selectedRecordId);
    console.log(this.selectedType);
    console.log(this.userID);
   
    this.authorizationNote.accountID = this.encodedAccountId;
    this.authorizationNote.authorizationID = this.authorizationId;   
    this.authorizationNote.noteTypeID = this.selectedType;
    this.authorizationNote.note = this.currentNote;
    this.authorizationNote.userID = this.userID;
    this.authorizationNote.noteDate = new Date();
    let authorizationNotes = new Array<AuthorizationNote>();
    authorizationNotes.push(this.authorizationNote);
    
    
    this.notesService.saveNote('api/AuthorizationNotes/CreateAuthorizationNotesAsync', authorizationNotes).subscribe((data) => {
      this.showSpinner = true;
      this.notesTemp = data.result;  
      this.getNotes(); 
      this.currentNote = '';
      this.showSpinner = false;
    });          
  }

}
