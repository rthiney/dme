import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../../layout/layout.service';
import { UserSessionManager } from './../../../helpers/user-session-manager';

@Component({
  selector: 'sa-login-info',
  template: `
    <div class="login-info">
      <i class="fa fa-lg fa-fw fa-user user-icon online"></i> {{ userName }}
    </div>`
})
export class LoginInfoComponent implements OnInit {
  private userName: any;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    let userSession = UserSessionManager.getUserSession();
    let user = userSession.user;
    this.userName = user.firstName + ' ' + user.lastName;
  }
}
