
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from '../shared/smartadmin.module';
import { ContactComponent } from './contact.component';
import { contactRouting } from './contact.routing';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    contactRouting
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
