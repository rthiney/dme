import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'sa-ribbon',
  templateUrl: './ribbon.component.html'
})
export class RibbonComponent {
  constructor(private layoutService: LayoutService) { }

  resetWidgets() {
    this.layoutService.factoryReset()
  }
}
