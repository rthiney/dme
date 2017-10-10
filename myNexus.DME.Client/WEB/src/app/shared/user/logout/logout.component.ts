import { Component } from '@angular/core';
import { NotificationService } from '../../utils/notification.service';
import { UserService } from '../user.service';
import { UserSessionManager } from './../../../helpers/user-session-manager';
import { environment } from './../../../../environments/environment';

declare var $: any;

@Component({
  selector: 'sa-logout',
  template: `
    <div id="logout" (click)="showPopup($event)" class="btn-header transparent pull-right">
        <span>
          <a href="#" title="Sign Out">
             <i class="fa fa-sign-out"></i>
          </a>
        </span>
    </div>`
})

export class LogoutComponent {
  constructor(private notificationService: NotificationService, private userService: UserService) { }

  showPopup(event) {
    event.preventDefault();
    this.notificationService.smartMessageBox({
      title: '<i class=\'fa fa-sign-out txt-color-orangeDark\'></i> Logout ?',
      content: 'After logout you will be redirected to login page.',
      buttons: '[No][Yes]'
    },
      (ButtonPressed) => {
        if (ButtonPressed === 'Yes') {
          this.logout();
        }
      });
  }

  logout() {
    this.userService.removeUserSession().subscribe();
    UserSessionManager.clearAll();
    window.location.href = environment.loginBaseUrl; // Back to login.
  }
}
