import { Observable } from 'rxjs/Rx';
import { ResponseErrorHandler } from './../errors/response-error-handler';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { BaseHttpService } from './../services/base-http.service';
import { asEnumerable } from 'linq-es2015';

@Injectable()
export class MemberSearchInputService extends BaseHttpService {
  constructor(http: Http, responseErrorHandler: ResponseErrorHandler) {
    super(environment.dnaBaseUrl, http, responseErrorHandler);
  }

  public getAllAccounts(): Observable<any> {
    return this.get('api/Lookup/GetAllAccountsAsync');
  }

  search(value: string, type: string): any {
    // This is what api end point expects
    return this.post('api/Workflow/ExecuteAsync', {
      WorkflowName: 'Member Search',
      WorkflowStepName: 'MemberSearch.IncomingParameters',
      WorkflowStepParameterName: type,
      WorkflowStepParameterValue: value
    });
  }
}



































//     // Fake Data
//     return FakeData.get(value, type);
// class FakeData {
//   static get(value: string, type: string) {
//     let _members = [
//       {
//         Id: 'M001',
//         FirstName: 'Bob',
//         LastName: 'Smith',
//         AccountName: 'Health Plan A',
//         SubscriberId: '123456789',
//         EligibilityStartDate: new Date('2017-01-01'),
//         EligibilityEndDate: new Date('2017-12-31'),
//         DateOfBirth: new Date('1975-12-15')
//       },
//       {
//         Id: 'M002',
//         FirstName: 'Steven',
//         LastName: 'Scool',
//         AccountName: 'Health Plan A',
//         SubscriberId: '987654321',
//         EligibilityStartDate: new Date('2017-01-01'),
//         EligibilityEndDate: new Date('2017-12-31'),
//         DateOfBirth: new Date('1962-12-15')
//       },
//       {
//         Id: 'M003',
//         FirstName: 'Samuel',
//         LastName: 'Jackson',
//         AccountName: 'Health Plan A',
//         SubscriberId: '010101',
//         EligibilityStartDate: new Date('2017-01-01'),
//         EligibilityEndDate: new Date('2017-12-31'),
//         DateOfBirth: new Date('1983-12-15')
//       }
//     ];

//     let _requests = [
//       {
//         Id: 'R001',
//         Number: 'R2017010100001',
//         Date: new Date('2017-01-02'),
//         Provider: 'Family Care',
//         OrderingPhysician: 'Dr. John McCain',
//         Urgency: 'Urgent',
//         Speciality: 'Respiratory',
//         Status: 'Unsubmitted',
//         MemberId: 'M002',
//         AuthorizationId: 'A001'
//       },
//       {
//         Id: 'R002',
//         Number: 'R2017010100002',
//         Date: new Date('2017-01-03'),
//         Provider: 'Central Medical Centre',
//         OrderingPhysician: 'Dr. Smith',
//         Urgency: 'Standard',
//         Speciality: 'O & P',
//         Status: 'Canceled',
//         MemberId: 'M002',
//         AuthorizationId: 'A002'
//       },
//       {
//         Id: 'R003',
//         Number: 'R2017010100003',
//         Date: new Date('2017-01-02'),
//         Provider: 'Family Care',
//         OrderingPhysician: 'Dr. John McCain',
//         Urgency: 'Facility Discharge',
//         Speciality: 'Basic',
//         Status: 'Unsubmitted',
//         MemberId: 'M001',
//         AuthorizationId: 'A003'
//       },
//       {
//         Id: 'R004',
//         Number: 'R2017010100004',
//         Date: new Date('2017-01-03'),
//         Provider: 'Central Medical Centre',
//         OrderingPhysician: 'Dr. Smith',
//         Urgency: 'Facility Discharge',
//         Speciality: 'Repair',
//         Status: 'Canceled',
//         MemberId: 'M001',
//         AuthorizationId: 'A004'
//       },
//       {
//         Id: 'R005',
//         Number: 'R2017010100005',
//         Date: new Date('2017-01-02'),
//         Provider: 'Family Care',
//         OrderingPhysician: 'Dr. John McCain',
//         Urgency: 'Standard',
//         Speciality: 'Wheelchair',
//         Status: 'Unsubmitted',
//         MemberId: 'M001',
//         AuthorizationId: 'A005'
//       },
//       {
//         Id: 'R006',
//         Number: 'R2017010100006',
//         Date: new Date('2017-01-03'),
//         Provider: 'Central Medical Centre',
//         OrderingPhysician: 'Dr. Smith',
//         Urgency: 'Urgent',
//         Speciality: 'Wound/Ostomy/Urological',
//         Status: 'Canceled',
//         MemberId: 'M001',
//         AuthorizationId: 'A006'
//       },
//       {
//         Id: 'R007',
//         Number: 'R2017010100007',
//         Date: new Date('2017-01-02'),
//         Provider: 'Family Care',
//         OrderingPhysician: 'Dr. John McCain',
//         Urgency: 'Standard',
//         Speciality: 'Wound/Ostomy/Urological',
//         Status: 'Unsubmitted',
//         MemberId: 'M001',
//         AuthorizationId: 'A007'
//       },
//       {
//         Id: 'R008',
//         Number: 'R2017010100008',
//         Date: new Date('2017-01-03'),
//         Provider: 'Central Medical Centre',
//         OrderingPhysician: 'Dr. Smith',
//         Urgency: 'Facility Discharge',
//         Speciality: 'Wound/Ostomy/Urological',
//         Status: 'Unsubmitted',
//         MemberId: 'M001',
//         AuthorizationId: 'A008'
//       },
//       {
//         Id: 'R009',
//         Number: 'R2017010100009',
//         Date: new Date('2017-01-02'),
//         Provider: 'Family Care',
//         OrderingPhysician: 'Dr. John McCain',
//         Urgency: 'Facility Discharge',
//         Speciality: 'Basic',
//         Status: 'Unsubmitted',
//         MemberId: 'M001',
//         AuthorizationId: 'A009'
//       },
//       {
//         Id: 'R010',
//         Number: 'R2017010100010',
//         Date: new Date('2017-01-03'),
//         Provider: 'Central Medical Centre',
//         OrderingPhysician: 'Dr. Smith',
//         Urgency: 'Standard',
//         Speciality: 'Repair',
//         Status: 'Unsubmitted',
//         MemberId: 'M001',
//         AuthorizationId: 'A010'
//       },
//       {
//         Id: 'R011',
//         Number: 'R2017010100011',
//         Date: new Date('2017-01-02'),
//         Provider: 'Family Care',
//         OrderingPhysician: 'Dr. John McCain',
//         Urgency: 'Urgent',
//         Speciality: 'Basic',
//         Status: 'Canceled',
//         MemberId: 'M001',
//         AuthorizationId: 'A011'
//       },
//       {
//         Id: 'R012',
//         Number: 'R2017010100012',
//         Date: new Date('2017-01-03'),
//         Provider: 'Central Medical Centre',
//         OrderingPhysician: 'Dr. Smith',
//         Urgency: 'Standard',
//         Speciality: 'Respiratory',
//         Status: 'Canceled',
//         MemberId: 'M001',
//         AuthorizationId: 'A012'
//       }
//     ];

//     let _authorizations = [
//       {
//         Id: 'A001',
//         Number: 'D2017010100001',
//         Date: new Date('2017-01-02'),
//         Provider: 'Family Care',
//         OrderingPhysician: 'Dr. John McCain',
//         Urgency: 'Standard',
//         Speciality: 'Basic',
//         Status: 'Pending',
//         MemberId: 'M002',
//         RequestId: 'R001'
//       },
//       {
//         Id: 'A002',
//         Number: 'D2017010100002',
//         Date: new Date('2017-01-03'),
//         Provider: 'Central Medical Centre',
//         OrderingPhysician: 'Dr. Smith',
//         Urgency: 'Standard',
//         Speciality: 'Basic',
//         Status: 'Pending',
//         MemberId: 'M002',
//         RequestId: 'R002'
//       },
//       {
//         Id: 'A003',
//         Number: 'D2017010100003',
//         Date: new Date('2017-01-02'),
//         Provider: 'Family Care',
//         OrderingPhysician: 'Dr. John McCain',
//         Urgency: 'Standard',
//         Speciality: 'Basic',
//         Status: 'Approved',
//         MemberId: 'M001',
//         RequestId: 'R003'
//       },
//       {
//         Id: 'A004',
//         Number: 'D2017010100004',
//         Date: new Date('2017-01-03'),
//         Provider: 'Central Medical Centre',
//         OrderingPhysician: 'Dr. Smith',
//         Urgency: 'Standard',
//         Speciality: 'Basic',
//         Status: 'Pending',
//         MemberId: 'M001',
//         RequestId: 'R004'
//       },
//       {
//         Id: 'A005',
//         Number: 'D2017010100005',
//         Date: new Date('2017-01-02'),
//         Provider: 'Family Care',
//         OrderingPhysician: 'Dr. John McCain',
//         Urgency: 'Standard',
//         Speciality: 'Basic',
//         Status: 'Approved',
//         MemberId: 'M001',
//         RequestId: 'R005'
//       },
//       {
//         Id: 'A006',
//         Number: 'D2017010100006',
//         Date: new Date('2017-01-03'),
//         Provider: 'Central Medical Centre',
//         OrderingPhysician: 'Dr. Smith',
//         Urgency: 'Standard',
//         Speciality: 'Basic',
//         Status: 'Pending',
//         MemberId: 'M001',
//         RequestId: 'R006'
//       },
//       {
//         Id: 'A007',
//         Number: 'D2017010100007',
//         Date: new Date('2017-01-02'),
//         Provider: 'Family Care',
//         OrderingPhysician: 'Dr. John McCain',
//         Urgency: 'Standard',
//         Speciality: 'Basic',
//         Status: 'Approved',
//         MemberId: 'M001',
//         RequestId: 'R007'
//       },
//       {
//         Id: 'A008',
//         Number: 'D2017010100008',
//         Date: new Date('2017-01-03'),
//         Provider: 'Central Medical Centre',
//         OrderingPhysician: 'Dr. Smith',
//         Urgency: 'Standard',
//         Speciality: 'Basic',
//         Status: 'Approved',
//         MemberId: 'M001',
//         RequestId: 'R008'
//       },
//       {
//         Id: 'A009',
//         Number: 'D2017010100009',
//         Date: new Date('2017-01-02'),
//         Provider: 'Family Care',
//         OrderingPhysician: 'Dr. John McCain',
//         Urgency: 'Standard',
//         Speciality: 'Basic',
//         Status: 'Pending',
//         MemberId: 'M001',
//         RequestId: 'R009'
//       },
//       {
//         Id: 'A010',
//         Number: 'D2017010100010',
//         Date: new Date('2017-01-03'),
//         Provider: 'Central Medical Centre',
//         OrderingPhysician: 'Dr. Smith',
//         Urgency: 'Standard',
//         Speciality: 'Basic',
//         Status: 'Pending',
//         MemberId: 'M001',
//         RequestId: 'R010'
//       },
//       {
//         Id: 'A011',
//         Number: 'D2017010100011',
//         Date: new Date('2017-01-02'),
//         Provider: 'Family Care',
//         OrderingPhysician: 'Dr. John McCain',
//         Urgency: 'Standard',
//         Speciality: 'Basic',
//         Status: 'Approved',
//         MemberId: 'M001',
//         RequestId: 'R011'
//       },
//       {
//         Id: 'A012',
//         Number: 'D2017010100012',
//         Date: new Date('2017-01-03'),
//         Provider: 'Central Medical Centre',
//         OrderingPhysician: 'Dr. Smith',
//         Urgency: 'Standard',
//         Speciality: 'Basic',
//         Status: 'Pending',
//         MemberId: 'M001',
//         RequestId: 'R012'
//       }
//     ];

//     let _widgets = [
//       'requests',
//       'authorizations'
//     ];

//     let member, requests, authorizations, message: any;
//     switch (type) {
//       case 'subscriberId': {
//         member = asEnumerable(_members).Where(x => x.SubscriberId === value.trim()).FirstOrDefault();
//         if (member) {
//           requests = asEnumerable(_requests).Where(x => x.MemberId === member.Id).ToArray();
//           authorizations = asEnumerable(_authorizations).Where(x => x.MemberId === member.Id).ToArray();
//         } else {
//           message = 'Member is not found';
//         }
//         break;
//       }
//       case 'authorizationNumber': {
//         authorizations = asEnumerable(_authorizations).Where(x => x.Number === value.trim()).ToArray();
//         if (authorizations && authorizations.length > 0) {
//           requests = asEnumerable(_requests).Where(x => x.Id === authorizations[0].RequestId).ToArray();
//           member = asEnumerable(_members).Where(x => x.Id === authorizations[0].MemberId).FirstOrDefault();
//         } else {
//           message = 'Authorization is not found';
//         }
//         break;
//       }
//       case 'requestNumber': {
//         requests = asEnumerable(_requests).Where(x => x.Number === value.trim()).ToArray();
//         if (requests && requests.length > 0) {
//           authorizations = asEnumerable(_authorizations).Where(x => x.Id === requests[0].AuthorizationId).ToArray();
//           member = asEnumerable(_members).Where(x => x.Id === requests[0].MemberId).FirstOrDefault();
//         } else {
//           message = 'Request is not found';
//         }
//         break;
//       }
//     }

//     if (member && (requests.length <= 0 && authorizations.length <= 0)) {
//       message = 'Member has no records';
//     }

//     // This is what we expect from the server
//     return {
//       member: member,
//       requests: requests,
//       authorizations: authorizations,
//       message: message,
//       widgets: _widgets
//     }
//   }
// }