import { Observable } from 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './../../shared/user/user.service';
import { environment } from './../../../environments/environment';
import { UserSessionManager } from './../../helpers/user-session-manager';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
    constructor(private userService: UserService) { }

    canActivate(): Observable<boolean> {
        let token: string = this.getUrlParameterByName('Token', window.location.href);
        let key: string = !token ? UserSessionManager.getUserSessionKey() : null;
        return this.userService
            .getUserSession(token, key)
            .map(data => {
                let result = data.result;
                if (result && result.user && result.user.isAuthorized) {
                    UserSessionManager.settUserSession(result);
                    UserSessionManager.setUserSessionKey(result.key);
                    return true;
                }
                window.location.href = environment.loginBaseUrl; // Back to login.
                return false
            });
    }

    private getUrlParameterByName(name, url): any {
        name = name.replace(/[\[\]]/g, '\\$&');
        let regex: RegExp = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        let results: RegExpExecArray = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return results[2];
    }
}
