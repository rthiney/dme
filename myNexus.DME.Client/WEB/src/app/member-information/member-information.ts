export interface MemberInformation {    
    messages: string[];
    member: any;
    requests: any;
    authorizations: any;
    widgets: string[];
    authorizationDetails: any; // detailed information about authorization comes from authorization table (not authorization details one)
    dmeProducts: any; // in db it called authorization details
}