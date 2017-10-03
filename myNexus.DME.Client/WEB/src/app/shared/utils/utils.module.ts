import { NgModule } from '@angular/core';

import { BodyService } from './body.service';
import { NotificationService } from './notification.service';

import { FieldFilterPipe } from './field-filter.pipe';
import { MomentPipe } from './moment.pipe';

import { ToggleActiveDirective } from './toggle-active.directive';

@NgModule({
  declarations: [
    FieldFilterPipe,
    MomentPipe,
    ToggleActiveDirective
  ],
  exports: [
    MomentPipe,
    FieldFilterPipe,
    ToggleActiveDirective
  ],
  providers: [
    BodyService,
    NotificationService
  ]
})
export class UtilsModule {
  static forRoot() {
    return {
      ngModule: UtilsModule,
      providers: [
        BodyService,
        NotificationService
      ]
    };
  }
}
