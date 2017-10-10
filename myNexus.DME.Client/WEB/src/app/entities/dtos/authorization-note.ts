import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationNote {
    accountID: string; 
    authorizationNoteID: string;
    authorizationID: string;
    authorizationNumber: string;
    noteTypeID: string;
    noteTypeName: string;
    note: string;
    noteDate: Date;
    userID: string;
    userLoginName: string;
    userFirstName: string;
    userLastName: string;
    userFullName: string;
    modifiedBy: string;
    modifiedOn: string;
}



