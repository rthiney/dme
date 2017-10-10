import { Component, OnInit, Input } from '@angular/core';
import { IGeneralNote } from '@entities/interfaces/i-general-note';
import { DataTableModule, SharedModule, DialogModule, InputTextareaModule
    , ButtonModule, DropdownModule } from 'primeng/primeng';
import { ILookupObject } from '@entities/interfaces/i-lookup-object';
import { IAuthDetailsProductNote } from '@entities/interfaces/i-auth-details-product-note';
import { DataService } from '@app/services/data.service';
import { UserService } from '@app/shared/user/user.service';

@Component({
    selector: 'member-details-widget',
    templateUrl: './member-details-widget.component.html',
    styleUrls: ['./member-details-widget.component.css']
})
export class MemberDetailsWidgetComponent implements OnInit {
    @Input() showMe: boolean = true;
    @Input() member: any;
    @Input() showVerticle: boolean = false;
    @Input() showOnRequest: boolean = false;
    public ds: DataService;
    public us: UserService;

    constructor(private dataService: DataService, private userService: UserService) {
        this.ds = dataService;
        this.us = userService;
        this.us.setIsUserInternal();
     }

    ngOnInit(): void {
        this.memberDetailNote = {
            id: 0,
            noteTypeId: 1,
            noteTypeText: 'General',
            creator: '',
            createdDate: new Date(),
            noteText: ''
    
        };
        this.memberDetailNoteType = 
            {
                key: 1,
                value: 'General'
            } 
     }

	showMemberDetailsNotesDialog: boolean = false;
	setShowMemberDetailsNotesDialog(){
		this.showMemberDetailsNotesDialog = true;
    }
    
    public memberDetailNoteType: ILookupObject;
    public memberDetailNoteTypeLookup: ILookupObject[] = [
        {
            key: 1,
            value: 'General'
        }
    
    ];
    
    public memberDetailNote: IAuthDetailsProductNote;


public memberDetailsNotesGridData: IGeneralNote[] = [
	{
        id: 100,
        noteTypeId: 1,
        noteTypeText: 'General',
        creator: 'Adv. User2',
		createdDate: new Date('01/06/2016'),
		noteText: 'Could not reach member on this day.'
	},
	{
        id: 101,
        noteTypeId: 1,
        noteTypeText: 'General',
        creator: 'Adv. User2',
		createdDate: new Date('02/06/2016'),
		noteText: 'Called member this day.'
	},
	{
        id: 102,
        noteTypeId: 2,
        noteTypeText: 'General',
        creator: 'Adv. User2',
		createdDate: new Date('03/06/2016'),
		noteText: 'Talked to member today.'
	}];   


}
