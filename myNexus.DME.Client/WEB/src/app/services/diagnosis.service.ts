import { ResponseErrorHandler } from './../errors/response-error-handler';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { BaseHttpService } from './../services/base-http.service';


@Injectable()
export class DiagnosisService extends BaseHttpService{
    constructor(http: Http, responseErrorHandler: ResponseErrorHandler) {
        super(environment.dnaBaseUrl, http, responseErrorHandler);
      }
    
     public getDiagnosisList() {
        return this.http.get('shared/resources/data/countries.json')
                    .toPromise()
                    .then(res => <any[]> res.json().data)
                    .then(data => { return data; });
    } 

    public getDiagnosisByContainsCodeOrDescription(icdCodeOrDescription: string) {
        let parameters = '?icdCodeOrDescription=' + encodeURIComponent('' + icdCodeOrDescription) + '&returnCount=10';
        return this.get('api/ICDCode/GetICDCodesByContainsCodeOrDescriptionAsync' + parameters);
    } 


    //the second is implemented with observables above
    /*  samples...

    the service:

      public getAllAccounts(): Observable<any> {
    return this.get('api/Lookup/GetAllAccountsAsync');
  }
    in the component:

      private setupAccounts(): void {
    this.msiService.getAllAccounts().subscribe(response => {
      if (response.result) {
        this.accounts = [{
          id: '',
          name: 'Select Account'
        }];
        this.selectedAccount = this.accounts[0].id;
        response.result.forEach(x => {
          this.accounts.push({
            id: x.accountID,
            name: x.accountName
          });
        });
      } else {
        throw new Error('Expected accounts list, but was empty.');
      }
    });
  }


    
    
    */ 
}
