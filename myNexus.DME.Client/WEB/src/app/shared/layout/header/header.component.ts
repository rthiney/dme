import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'sa-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private searchMobileActive: boolean = false;

  constructor(private router: Router) { }

  toggleSearchMobile() {
    this.searchMobileActive = !this.searchMobileActive;
    $('body').toggleClass('search-mobile', this.searchMobileActive);
  }

  onSubmit() {
    alert('Not implemented, yet');
  }
}
