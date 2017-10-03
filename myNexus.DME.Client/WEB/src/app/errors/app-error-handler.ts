import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {
    /*
    "...since error handling is really important it needs to be loaded first,
    thus making it not possible to use dependency injection in the constructor
    to get other services such as the error handle api service to send the server
    our error details. As a result, we have to manually call the injector
    with the service name in the execution of the handleError."

    For referrence follow https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c
    */
   }

  handleError(error: any): void {
    alert(error); // Must be done in better way of notifying user about error
    console.log(error); // Must be real logger
  }
}
