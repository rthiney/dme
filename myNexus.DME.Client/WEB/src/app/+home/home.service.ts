import { ResponseErrorHandler } from './../errors/response-error-handler';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { BaseHttpService } from './../services/base-http.service';

@Injectable()
export class HomeService extends BaseHttpService {
  constructor(http: Http, responseErrorHandler: ResponseErrorHandler) {
    super(environment.dnaBaseUrl + 'api/Home/', http, responseErrorHandler);
  }
}
