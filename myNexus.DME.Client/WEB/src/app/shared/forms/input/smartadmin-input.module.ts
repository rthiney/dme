import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileInputModule } from './file-input/file-input.module';
import { OnOffSwitchModule } from './on-off-switch/on-off-switch.module';
import { DualListBoxModule } from './dual-list-box/dual-list-box.module';
import { XEditableModule } from './x-editable/x-editable.module';
import { RadioModule } from './radio/radio.module';

/* Directives */

// Masked Input
import { MaskedInputDirective } from './directives/masked-input/masked-input.directive';

// Pickers
import { SmartClockpickerDirective } from './directives/pickers/smart-clockpicker.directive';
import { SmartTimepickerDirective } from './directives/pickers/smart-timepicker.directive';
import { UiDatepickerDirective } from './directives/pickers/ui-datepicker.directive';

// Select2
import { Select2Module } from './directives/select2/select2.module';

// Sliders
import { IonSliderDirective } from './directives/sliders/ionslider.directive';
import { NouisliderDirective } from './directives/sliders/nouislider.directive';

@NgModule({
  imports: [
    CommonModule,
    DualListBoxModule,
    FileInputModule,
    OnOffSwitchModule,
    XEditableModule,
    Select2Module,
    RadioModule
  ],
  declarations: [
    MaskedInputDirective,
    SmartClockpickerDirective,
    SmartTimepickerDirective,
    IonSliderDirective,
    UiDatepickerDirective,
    NouisliderDirective
  ],
  exports: [
    DualListBoxModule,
    FileInputModule,
    OnOffSwitchModule,
    XEditableModule,
    Select2Module,
    XEditableModule,
    RadioModule,
    MaskedInputDirective,
    SmartClockpickerDirective,
    SmartTimepickerDirective,
    IonSliderDirective,
    UiDatepickerDirective,
    NouisliderDirective
  ]
})
export class SmartadminInputModule { }
