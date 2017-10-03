import { Component, Input, Injector, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'queues-widget',
    templateUrl: './queues-widget.component.html',
    styleUrls: ['./queues-widget.component.css'],
    //encapsulation: ViewEncapsulation.None
})
export class QueuesWidgetComponent {
    @Input() showMe: boolean = false;
    @Input() data: any[];
    @Input() states: any[];
    //@Input() rowStyleClass: any;
    @Output() output: EventEmitter<{}> = new EventEmitter();

    onRowSelect(event) {
        // console.log('Selected Request Id ' + event.data.Id);
        this.output.emit({
            MemberID: event.data.MemberID
        });        
    }

    rowStyleClass(data: any, index: number) {                      
          return data.PendingColor == 1 ? 'black' : data.PendingColor == 2 ? 'green' : data.PendingColor == 3 ? 'red' : data.PendingColor == 4 ? 'yellow': 'black';        
    }

}
