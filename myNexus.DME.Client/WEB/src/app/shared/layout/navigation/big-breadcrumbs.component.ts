// Not sure that this component for. Need to do a little research

import {Component, Input} from '@angular/core';

@Component({

  selector: 'sa-big-breadcrumbs',
  template: `
    <div>
      <h1 class="page-title txt-color-blueDark">
        <i class="fa-fw fa fa-{{icon}}"></i>{{items[0]}}
        <span *ngFor="let item of items.slice(1)">> {{item}}</span>
      </h1>
    </div>
  `,
})
export class BigBreadcrumbsComponent {
  @Input() public icon: string;
  @Input() public items: Array<string>;
}
