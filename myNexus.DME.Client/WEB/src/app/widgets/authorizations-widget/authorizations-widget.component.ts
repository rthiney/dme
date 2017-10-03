import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { DataTable } from 'primeng/primeng';
import { DataService } from '@app/services/data.service';

@Component({
    selector: 'authorizations-widget',
    templateUrl: './authorizations-widget.component.html',
    styleUrls: ['./authorizations-widget.component.css'],
    encapsulation: ViewEncapsulation.None 
})
export class AuthorizationsWidgetComponent implements OnInit {
    @Input() showMe: boolean = false;
    @Input() data: any[];
    public ds: DataService;


    public constructor(private dataService: DataService) {
        this.ds = dataService; 
    }

    providers = [
        { label: 'Advanced Respiratory', value: 'Advanced Respiratory' },
        { label: 'American Home Paitent', value: 'American Home Patient' }
    ];

    urgencies = [
        { label: 'Standard', value: 'Standard' },
        { label: 'Urgent', value: 'Urgent' }
    ];

    statuses = [
        { label: 'Approved', value: 'Approved' },
        { label: 'Denied', value: 'Denied' },
        { label: 'Pending', value: 'Pending' }
    ];

    @Output() output: EventEmitter<{}> = new EventEmitter();

    ngOnInit(): void {
        this.data.sort((a, b) => a.AuthorizationStatusDmeSortOrder < b.AuthorizationStatusDmeSortOrder ? -1 : a.AuthorizationStatusDmeSortOrder > b.AuthorizationStatusDmeSortOrder ? 1 : 0)        
    }

    onRowSelect(event) {
        // console.log('Selected Authorization ' + JSON.stringify(event.data));
         console.log('Selected Authorization Id ' + JSON.stringify(event.data.AuthorizationID))

        this.ds.selectedRecordType = 1;
        this.ds.selectedRecordId = event.data.AuthorizationID;
        this.ds.getAuthRequestDetails();
    }

    public update(dt: DataTable) {
        dt.reset();
    }
}

