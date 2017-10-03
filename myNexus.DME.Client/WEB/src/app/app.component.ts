import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
}
