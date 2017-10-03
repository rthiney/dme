import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JquiDialogDirective } from './jqui-dialog/jqui-dialog.directive';
import { JquiDialogLauncherDirective } from './jqui-dialog/jqui-dialog-launcher.directive';
import { JquiAccordionDirective } from './jqui-accordion.directive';
import { JquiMenuDirective } from './jqui-menu.directive';
import { JquiAutocompleteDirective } from './jqui-autocomplete.directive';
import { JquiProgressbarDirective } from './jqui-progressbar.directive';
import { JquiSpinnerDirective } from './jqui-spinner.directive';
import { JquiSliderDirective } from './jqui-slider.directive';
import { JquiTabsDirective } from './jqui-tabs.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [
    JquiDialogDirective,
    JquiDialogLauncherDirective,
    JquiAccordionDirective,
    JquiAutocompleteDirective,
    JquiMenuDirective,
    JquiProgressbarDirective,
    JquiSliderDirective,
    JquiSpinnerDirective,
    JquiTabsDirective
  ],
  exports: [
    JquiDialogDirective,
    JquiDialogLauncherDirective,
    JquiAccordionDirective,
    JquiAutocompleteDirective,
    JquiMenuDirective,
    JquiProgressbarDirective,
    JquiSliderDirective,
    JquiSpinnerDirective,
    JquiTabsDirective
  ]
})
export class JqueryUiModule {}
