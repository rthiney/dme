import { AccountSessionManager } from './../helpers/account-session-manager';
import { ResponseErrorHandler } from './../errors/response-error-handler';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType, RequestOptions } from '@angular/http';
import { UserSessionManager } from './../helpers/user-session-manager'

@Injectable()
export class BaseHttpService {
  private headers: Headers;
  public encodedAccountId: any;

  constructor(
    private baseUrl: string,
    public http: Http,
    private responseErrorHandler: ResponseErrorHandler
  ) { 
    this.encodedAccountId = encodeURIComponent('' + AccountSessionManager.getAccountID());
  }

  private createUserSessionKeyHeader() {
    this.headers = new Headers();
    this.headers.append('SessionKey', UserSessionManager.getUserSessionKey());
    this.headers.append('AccountId', AccountSessionManager.getAccountID());
  }

  get(endPointUrl: string) {
    this.createUserSessionKeyHeader();
    return this.http
      .get(this.baseUrl + endPointUrl, { headers: this.headers })
      .map(response => response.json())
      .catch(e => this.responseErrorHandler.handle(e));
  }

  post(endPointUrl: string, data: any) {
    this.createUserSessionKeyHeader();
    return this.http
      .post(this.baseUrl + endPointUrl, data, { headers: this.headers })
      .map(response => response.json())
      .catch(e => this.responseErrorHandler.handle(e));
  }

  delete(endPointUrl: string, id: any) {
    this.createUserSessionKeyHeader();
    return this.http
      .delete(this.baseUrl + endPointUrl + '/' + id, { headers: this.headers })
      .map(response => response.json())
      .catch(e => this.responseErrorHandler.handle(e));
  }

  create(endPointUrl: string, data: any) {
    return this.post(endPointUrl, JSON.stringify(data));
  }
}