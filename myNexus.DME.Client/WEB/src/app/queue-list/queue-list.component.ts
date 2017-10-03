import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { QueueListService } from './queue-list.service';
import { DataTableModule, SharedModule, MultiSelectModule, SliderModule, DropdownModule, CheckboxModule, DataTable } from 'primeng/primeng';

@Component({
  selector: 'queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QueueListComponent implements OnInit {

  records: any[];   
  states: any[];
  queues: any[];
  authStatuses: any[];
  urgencies: any[];
  providers: any[];
  showme: boolean = true;

  constructor(private QueueListService: QueueListService) { }

  ngOnInit() {
    this.records = this.QueueListService.getTableData(); 
    this.queues = this.QueueListService.getQueues();
    this.states = this.QueueListService.getStates();
    this.urgencies = this.QueueListService.getUrgencies();
    this.providers = this.QueueListService.getProviders();
    this.authStatuses = this.QueueListService.getAuthStatuses();    
  }  

  private getOutput(callback) {
    alert();
    console.log('getOutput -> callback ' + JSON.stringify(callback));  
  } 
}
