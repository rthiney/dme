import { MemberSessionManager } from './../helpers/member-session-manager';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'member-search',
  template: '<member-search-input (data)="getData($event)"></member-search-input>',
})
export class MemberSearchComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  public getData(callback) {
    this.setMemberId(callback.member);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        member: JSON.stringify(callback.member),
        requests: JSON.stringify(callback.requests),
        authorizations: JSON.stringify(callback.authorizations),
        messages: JSON.stringify(callback.messages),
        widgets: JSON.stringify(callback.widgets)
      }
    };
    this.router.navigate(['/member-information'], navigationExtras);
  }

  private setMemberId(member) {
    member ? MemberSessionManager.setMemberId(member.Id) : MemberSessionManager.clearAll();
    // console.log('Current member id ' + MemberSessionManager.getMemberId());
  }
}