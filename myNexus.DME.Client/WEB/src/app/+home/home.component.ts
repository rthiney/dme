import { Component, OnInit } from '@angular/core';
import { LayoutService } from './../shared/layout/layout.service';
import { HomeService } from './home.service';
import { UserSessionManager } from './../helpers/user-session-manager';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private member: any;
  private userName: any;

  constructor(private layoutService: LayoutService, private homeService: HomeService) { }

  ngOnInit() {
    let userSession = UserSessionManager.getUserSession();
    let user = userSession.user;
    this.userName = user.firstName + ' ' + user.lastName;

    this.member = {
      Id: 'M001',
      FirstName: 'Bob',
      LastName: 'Smith',
      AccountName: 'Health Plan A',
      SubscriberId: '123456789',
      EligibilityStartDate: new Date('2017-01-01'),
      EligibilityEndDate: new Date('2017-12-31'),
      DateOfBirth: new Date('1975-12-15')
    };
  }

  toggleShortcut() {
    this.layoutService.onShortcutToggle()
  }
}