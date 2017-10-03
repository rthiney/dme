import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SmartadminModule } from './../../shared/smartadmin.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        SmartadminModule
    ],
    declarations: [
        ForbiddenComponent
    ],
    providers: [],
    exports: [
        ForbiddenComponent
    ]
})
export class ErrorViewsModule { }