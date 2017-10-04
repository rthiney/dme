import { BaseHttpService } from './../services/base-http.service';
import { environment } from './../../environments/environment';
import { ResponseErrorHandler } from './../errors/response-error-handler';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NotesService extends BaseHttpService {
  

  constructor(http: Http, responseErrorHandler: ResponseErrorHandler) {
    super(environment.dnaBaseUrl, http, responseErrorHandler);
   }
      
  notes = [{
    "CreatedDate": "2017-04-15T11:24:14Z",
    "CreatedBy": "fmatyushenko0",
    "Type": "Authorization",
    "Note": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "AuthorizationNumber": "D2017010112310"
  }, {
    "CreatedDate": "2017-03-24T02:21:44Z",
    "CreatedBy": "mlinnitt1",
    "Type": "Authorization",
    "Note": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "AuthorizationNumber": "D2017010112333"
  }, {
    "CreatedDate": "2016-10-21T22:53:26Z",
    "CreatedBy": "canfosso2",
    "Type": "Authorization",
    "Note": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    "AuthorizationNumber": "D2017010112343"
  }, {
    "CreatedDate": "2017-07-04T19:18:10Z",
    "CreatedBy": "koldacres3",
    "Type": "Authorization",
    "Note": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "AuthorizationNumber": " D2017010112342"
  }, {
    "CreatedDate": "2017-07-09T12:09:16Z",
    "CreatedBy": "nfirby4",
    "Type": "Clinical",
    "Note": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "AuthorizationNumber": "D2017010112341"
  }, 
  {
    "CreatedDate": "2017-07-09T12:09:16Z",
    "CreatedBy": "nfirby4",
    "Type": "Clinical",
    "Note": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "AuthorizationNumber": "D2017010112341"
  },
  {
    "CreatedDate": "2017-07-09T12:09:16Z",
    "CreatedBy": "nfirby4",
    "Type": "Clinical",
    "Note": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "AuthorizationNumber": "D2017010112341"
  },
  {
    "CreatedDate": "2017-04-02T17:00:59Z",
    "CreatedBy": "smclorinan5",
    "Type": "Follow-Up",
    "Note": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "AuthorizationNumber": "D2017010112378"
  }];
 
  
  public getNoteTypes(): Observable<any> {    
    return this.get('api/Lookup/GetAllNoteTypesAsync');
  } 

  types = [    
    {text: 'Authorization', id: 'Authorization'},
    {text: 'Clinical', id: 'Clinical'},
    {text: 'Follow-Up', id: 'FollowUp'},
    {text: 'MD Review', id: 'MDReview'}
  ];

  getNotes(){
      return this.notes;
  }  

}
