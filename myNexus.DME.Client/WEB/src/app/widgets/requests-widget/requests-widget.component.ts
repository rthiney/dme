import { Component, Input, Injector, Output, EventEmitter, OnInit } from '@angular/core';
import { DataTable } from 'primeng/primeng';
import { DataService } from '@app/services/data.service';

@Component({
    selector: 'requests-widget',
    templateUrl: './requests-widget.component.html',
    styleUrls: ['./requests-widget.component.css']
})
export class RequestsWidgetComponent implements OnInit {
    @Input() showMe: boolean = false;
    @Input() data: any[];
    @Output() output: EventEmitter<{}> = new EventEmitter();
    public ds: DataService;

    public constructor(private dataService: DataService) {
        this.ds = dataService; 
    }

    providers = [
        {label: 'Advanced Respiratory', value: 'Advanced Respiratory'},
        {label: 'American Home Paitent', value: 'American Home Patient'}    
      ];

    urgencies = [
        {label: 'Standard', value: 'Standard'},
        {label: 'Urgent', value: 'Urgent'}    
    ];      

    ngOnInit(): void {
        this.data.sort((a, b) => a.AuthorizationStatusDmeSortOrder < b.AuthorizationStatusDmeSortOrder ? -1 : a.AuthorizationStatusDmeSortOrder > b.AuthorizationStatusDmeSortOrder ? 1 : 0)        
    }

    onRowSelect(event) {
        console.log('Selected Request Id ' + event.data.RequestID);
        this.ds.selectedRecordType = 2;
        this.ds.selectedRecordId = event.data.RequestID;
        this.ds.getAuthRequestDetails();
    }

    public update(dt: DataTable) {
        dt.reset();        
      }
}