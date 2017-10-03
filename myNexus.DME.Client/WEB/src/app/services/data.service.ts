import { ResponseErrorHandler } from './../errors/response-error-handler';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { BaseHttpService } from './../services/base-http.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {SearchCriteria} from '../member-search-input/search-criteria';
import { IAuthDetailsDmeProduct } from '@entities/interfaces/i-auth-details-dme-product';
import * as Rx from 'rxjs/Rx'
import { Observable } from 'rxjs'
import * as moment from 'moment'

@Injectable()
export class DataService extends BaseHttpService {

  public searchCriteria = new SearchCriteria();
  
  private searchCriteriaSource = new BehaviorSubject<SearchCriteria>(this.searchCriteria);
  currentSearchCriteria = this.searchCriteriaSource.asObservable();

  constructor(http: Http, responseErrorHandler: ResponseErrorHandler) {
    super(environment.dnaBaseUrl, http, responseErrorHandler);

    this.requestApprovalData = {
      /*     authType: 'Authorization', */
          authNumber: '',
          startDate: null,
          creationDate: null,
          urgency: '',
          authStatusType: '',
          authStatus: '',
          effectiveDates: '',
          orderingPhysician: '',
          referralSource: '',
          memberHt: '',
          memberWt: '', 
          specialInstructionsData: ''
          }


  }

  changeSearchCriteria(searchCriteria: SearchCriteria) {
    this.searchCriteriaSource.next(searchCriteria);
  }

  //sample call using observables: do not remove this code sample
  /*
      public getDiagnosisByContainsCodeOrDescription(icdCodeOrDescription: string) {
        let parameters = '?icdCodeOrDescription=' + encodeURIComponent('' + icdCodeOrDescription) + '&returnCount=10';
        return this.get('api/ICDCode/GetICDCodesByContainsCodeOrDescriptionAsync' + parameters);
    } 
  */

  public dmeProductGridData: any[];
  public selectedRecordType: number;  // selectedRecordType  auth = 1, request=2
  public selectedRecordId: string;
  public selectedRowAuth: any;
  public selectedRowRequest: any;
  public authDetailData: any; 
  public requestDetailData: any;
  public requestApprovalData: any  = {
    /*     authType: 'Authorization', */
        authNumber: '',
        startDate: null,
        creationDate: null,
        urgency: '',
        authStatusType: '',
        authStatus: '',
        effectiveDates: '',
        orderingPhysician: '',
        referralSource: '',
        memberHt: '',
        memberWt: '', 
        specialInstructionsData: ''
        };
  
  public getAuthRequestDetails(){
    switch (this.selectedRecordType) {
      case 1:  // auth=1, request=2
          this.getAuthDetailData().subscribe((data) => {
            this.authDetailData = data.result;
            this.setAuthData();
            console.log(this.authDetailData);
            console.log(this.authDetailData.authorizationNumber);
          });

          this.getDmeProductGridAuthData().subscribe((data) => {
            this.dmeProductGridData = data.result;
            console.log(this.dmeProductGridData);
          });
          this.selectedRowRequest = null;
          break;
      case 2:
          this.getRequestDetailData().subscribe((data) => {
            this.requestDetailData = data.result;
            this.setRequestData();
            console.log(this.authDetailData);
            console.log(this.authDetailData.authorizationNumber);
          });

          this.getDmeProductGridRequestData().subscribe((data) => {
            this.dmeProductGridData = data.result;
            console.log(this.dmeProductGridData);
          });
          this.selectedRowAuth = null;
          break;
  }}

  public dmeProductGridAuthSelectedItem: IAuthDetailsDmeProduct;
  public getDmeProductGridAuthData(): Observable<any> {
    let parameters = '?accountId='+ this.encodedAccountId +'&authorizationId=' + encodeURIComponent('' + this.selectedRecordId);
    return this.get('api/AuthorizationDetails/GetAuthorizationDetailsByAuthorizationId' + parameters);
  } 

  public getAuthDetailData(): Observable<any> {
    let parameters = '?accountId='+ this.encodedAccountId +'&authorizationId=' + encodeURIComponent('' + this.selectedRecordId);
    return this.get('/api/Authorization/GetAuthorizationById' + parameters);
  } 

  public dmeProductGridRequestSelectedItem: IAuthDetailsDmeProduct;
  public getDmeProductGridRequestData(): Observable<any> {
    let parameters = '?accountId='+ this.encodedAccountId +'&requestId=' + encodeURIComponent('' + this.selectedRecordId);
    return this.get('api/RequestDetails/GetRequestsDetailsByRequestId' + parameters);
  } 

  public getRequestDetailData(): Observable<any> {
    let parameters = '?accountId='+ this.encodedAccountId +'&requestId=' + encodeURIComponent('' + this.selectedRecordId);
    return this.get('/api/Request/GetRequestsByIdAsync' + parameters);
  } 

  public setAuthData(){
    if(this.authDetailData){
    this.requestApprovalData = {
/*     authType: authDetailData.authorizationNumber, */
    authNumber: this.authDetailData.authorizationNumber,
    startDate: this.authDetailData.startDate,
    creationDate: this.authDetailData.ceatedOn,
    urgency: this.authDetailData.urgencyName,
    authStatusType: this.authDetailData.authorizationStatusName,
    authStatus: this.authDetailData.authorizationStatusName,
    //effectiveDates: this.authDetailData.effectiveFromDate + '-' + this.authDetailData.effectiveToDate,
    effectiveFromDate:  this.authDetailData.effectiveFromDate,
    effectiveToDate: this.authDetailData.effectiveToDate, 
    orderingPhysician: this.authDetailData.orderingPhysicianName,
    referralSource: this.authDetailData.referralSourceName,
    memberHt: '9 ft 13 in',
    memberWt: '850 lbs',
    specialInstructionsData: this.authDetailData.specialInstruction
    }
  }

  }

  public setRequestData(){
    if(this.requestDetailData){
      this.requestApprovalData = {
  /*     authType: authDetailData.authorizationNumber, */
      authNumber: this.requestDetailData.requestNumber,
      startDate: this.requestDetailData.startDate,
      creationDate: this.requestDetailData.ceatedOn,
      urgency: this.requestDetailData.urgencyName,
      authStatusType: this.requestDetailData.requestStatusName,
      authStatus: this.requestDetailData.requestStatusName,
      //effectiveDates: this.authDetailData.effectiveFromDate + '-' + this.authDetailData.effectiveToDate,
      effectiveFromDate:  this.requestDetailData.effectiveFromDate,
      effectiveToDate: this.requestDetailData.effectiveToDate, 
      orderingPhysician: this.requestDetailData.orderingPhysicianName,
      referralSource: this.requestDetailData.referralSourceName,
      memberHt: '8 ft 13 in',
      memberWt: '851 lbs',
      specialInstructionsData: this.requestDetailData.specialInstruction
      }
    }
  }




}