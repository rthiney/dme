import { Component, OnInit, Input, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
  selector: 'dual-list-box',
  templateUrl: './dual-list-box.component.html',
  styleUrls: ['./dual-list-box.component.css']
})
export class DualListBoxComponent implements OnInit {
  @Input() selected: Array<any> = [];
  @Input() nonSelectedFilter: any;
  @Input() nonSelectedListLabel: string = 'Non-selected';
  @Input() selectedListLabel: string = 'Selected';
  @Input() preserveSelectionOnMove: string = 'moved';
  @Input() moveOnSelect: boolean = false;
  @Input() size: number = 10;
  @Input() items: Array<any>;
  @Output() itemsChange = new EventEmitter();

  @HostListener('click') onClick() {
    let selected = this.element.find('.smart-duallistbox').val() || [];

    if (selected.some(it => this.selected.indexOf(it) === -1) || this.selected.some(it => selected.indexOf(it) === -1)) {
      this.selected = selected;

      this.items.forEach((item) => {
        if (this.selected.indexOf(item.key) > -1) {
          item.selected = true;
        } else {
          delete item.selected;
        }
      });

      this.itemsChange.emit(this.items);
    }
  }

  private element: any;

  constructor(private el: ElementRef) {
    this.element = $(this.el.nativeElement);
  }

  ngOnInit() {
    this.selected = this.items.filter((item) => item.selected).map(item => item.key);
    System.import('script-loader!bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.min.js').then(() => {
      this.render();
    });
  }

  render() {
    let options = {
      nonSelectedFilter: this.nonSelectedFilter,
      nonSelectedListLabel: this.nonSelectedListLabel,
      selectedListLabel: this.selectedListLabel,
      preserveSelectionOnMove: this.preserveSelectionOnMove,
      moveOnSelect: this.moveOnSelect,
      size: this.size
    };

    this.element.bootstrapDualListbox(options);
  }
}
