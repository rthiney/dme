import { Observable } from 'rxjs/Rx';
import { Injectable, Injector } from '@angular/core';
import { Response } from '@angular/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { ResponseError } from './responce-error';

@Injectable()
export class ResponseErrorHandler {
    private responceError: ResponseError;

    constructor(private injector: Injector) {
        this.responceError = new ResponseError(this.injector);
    }

    public handle(responceError: Response): ErrorObservable {
        return Observable.throw({
            message: this.responceError.handle(responceError),
            ngNavigationCancelingError: true // See for more referrence https://github.com/angular/angular/issues/17148
          })
    }
}
