import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { BaseHttpService } from './../services/base-http.service';
import { ResponseErrorHandler } from './../errors/response-error-handler';

@Injectable()
export class AuthDetailService extends BaseHttpService {
  constructor(http: Http, private reh: ResponseErrorHandler) {
    super(environment.dnaBaseUrl + 'api/Home/GetTest', http, reh);
  }
}

