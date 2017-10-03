import { NotificationService } from './../../shared/utils/notification.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './../../shared/user/user.service';

@Injectable()
export class InternalUserOnlyGuard implements CanActivate {
    constructor(private userService: UserService, private notificationService: NotificationService) { }

    canActivate(): Observable<boolean> {
        return this.userService
            .isCurrentUserInternal()
            .map(data => {
                if (!data.result) {
                    this.notificationService.smartMessageBox({
                        title: '<i class=\'fa fa-ban txt-color-orangeDark\'></i> You are not allowed to view this content',
                        buttons: '[CLOSE]'
                    });
                }
                return data.result;
            });
    }
}
