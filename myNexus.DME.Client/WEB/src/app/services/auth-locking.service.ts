import { Injectable } from '@angular/core';
import {Authorization} from '../auth-detail/authorization';

@Injectable()
export class AuthLockingService {
  authorizations : Authorization[];         // todo: make this an observable

  constructor() { }

  lockAuthorization(authorization: Authorization){
    let updateItem = this.authorizations.find(this.findAuthToUpdate, authorization.AuthorizationID);    
    let index = this.authorizations.indexOf(updateItem);        
    this.authorizations[index].IsLocked = authorization.IsLocked;
  }
    
  findAuthToUpdate(authorization) { 
    return authorization.AuthorizationID === this;
  }

}
