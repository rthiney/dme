import { ResponseErrorHandler } from './../../errors/response-error-handler';
import { BaseHttpService } from './../../services/base-http.service';
import { UserSessionManager } from './../../helpers/user-session-manager';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'; // Will import catch, throw and other.
import { environment } from './../../../environments/environment';

@Injectable()
export class UserService extends BaseHttpService {
  private userSession: any;

  constructor(http: Http, responseErrorHandler: ResponseErrorHandler) {
    super(environment.dnaBaseUrl + 'api/Authentication/', http, responseErrorHandler);
  }

  getUserSession(token: string, key: string): Observable<any> {
    let parameters = '?token=' + encodeURIComponent('' + token) + '&' + this.getUserSessionKeyParameter(key);
    return this.get('GetUserSessionAsync' + parameters);
  }

  removeUserSession(): Observable<any> {
     return this.get('RemoveUserSessionAsync?' + this.getUserSessionKeyParameter());
  }

  isUserInternal: boolean;
  
  setIsUserInternal(): void {
    this.get('IsCurrentUserInternal?' + this.getUserSessionKeyParameter())
    .first()
    .subscribe(
      x => this.isUserInternal = x.result
    );
  }

  isCurrentUserInternal(): Observable<any> {
    return this.get('IsCurrentUserInternal?' + this.getUserSessionKeyParameter());
  }

  private getUserSessionKeyParameter(key?: string) {
    let sessionKey = UserSessionManager.getUserSessionKey();
    key = (key) ? key : sessionKey;
    let encodedKey = encodeURIComponent('' + key);
    return 'key=' + encodedKey;
  }
}
