import { RadioType } from './radio.type';
import { RadioService } from './radio.service';
import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';

@Injectable()
@Component({
    selector: 'radio',
    templateUrl: './radio.template.html',
    styleUrls: ['./radio.styles.css']
})
export class RadioComponent {
    @Input() radios: RadioType[];
    @Output() selected: EventEmitter<{}> = new EventEmitter();

    onClick (value: any) {
        this.selected.emit({
            value: value
        });
    }
}
