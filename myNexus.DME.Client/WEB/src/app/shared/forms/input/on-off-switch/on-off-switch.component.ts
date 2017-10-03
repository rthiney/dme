import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'on-off-switch',
  templateUrl: './on-off-switch.component.html',
})
export class OnOffSwitchComponent implements OnInit {
  @Input() title: string;
  @Input() value: any;
  @Input() model: boolean;
  @Output() modelChange = new EventEmitter();

  public widgetId;

  static widgetsCounter = 0;

  constructor() {}

  ngOnInit() {
    this.value = this.model;
    this.widgetId = 'on-off-switch' + OnOffSwitchComponent.widgetsCounter++;
  }

  onChange() {
    this.modelChange.emit(this.value);
  }
}
