import { Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { JsonApiService } from './../core/api/json-api.service';
import { DatatableComponent } from './../shared/ui/datatable/datatable.component';
import { DataTableModule, SharedModule, DialogModule, InputTextareaModule, ButtonModule, DropdownModule, SplitButtonModule,Menubar, MenuItem } from 'primeng/primeng';
import { IAuthDetailsDmeProduct } from '@entities/interfaces/i-auth-details-dme-product';
import { IAuthDetailsMemberHistory } from '@entities/interfaces/i-auth-details-member-history'; 
import { IAuthDetailsProductNote } from '@entities/interfaces/i-auth-details-product-note';
import { MemberInformation } from './../member-information/member-information';
import { ILookupObject } from '@entities/interfaces/i-lookup-object';
import { Subscription } from "rxjs/Rx";

//declare var $: any;

@Component({
  selector: 'app-auth-detail',
  templateUrl: './auth-detail.component.html',
  styleUrls: ['./auth-detail.component.css']
})
export class AuthDetailComponent implements OnInit {
  public memberInformation: MemberInformation;
  public member: any;
  private components: any;
  private array: ArrayConstructor = Array;
  showTemplate: boolean = true;
  public authId: string;
  public viewType: number;
  public items: MenuItem[];

public constructor(private route: ActivatedRoute, private router: Router) {
	this.member = {
		AccountName: 'Health Plan A',
		SubscriberNumber: '123456789',
		FirstName: 'Bob',
		LastName: 'Smith',
		DateOfBirth: '12/14/1975',
		EffectiveBeginDate: new Date('01/01/2016'),
		EffectiveEndDate: new Date('12/31/2020')
	};
 }

  ngOnInit(): void {
	this.route.queryParams.subscribe(p => {
		this.viewType = p.viewType;
		this.authId = p.authId;
		this.viewType = typeof this.viewType === 'undefined' ? 1 : this.viewType;
		this.authId = typeof this.authId === 'undefined' ? "1" : this.authId;
	}); 

	this.productNote = {
		id: 0,
		noteTypeId: 0,
		noteTypeText: '',
		creator: '',
		createdDate: new Date(),
		noteText: ''
	};

	this.items = [
		{label: 'View Documents', command: () => {			
		}},
		{label: 'Upload Documents', command: () => {			
		}},
		{label: 'Correspondence'},
		{label: 'Move Documents'}
	];
  }
	
	selectedProduct: IAuthDetailsDmeProduct;

	RowSelectProduct(event) {
		let i: number = event.data;	//this is our id number of the selected obj
		this.setShowProductDetailsDialog();
	}

	showProductDetailsAddNewDialog: boolean = false;
	setShowProductDetailsAddNewDialog() {
		this.showProductDetailsAddNewDialog = true;
	}

	showProductDetailsDialog: boolean = false;
	setShowProductDetailsDialog() {
		this.showProductDetailsDialog = true;
	}

	showDemographicsDialog: boolean = false;
	setShowDemographicsDialog() {
		this.showDemographicsDialog = true;
	}

	showDiagnosisDialog: boolean = false;
	setShowDiagnosisDialog() {
		this.showDiagnosisDialog = true;
	}

	showReferralSourceDialog: boolean = false;
	setShowReferralSourceDialog() {
		this.showReferralSourceDialog = true;
	}

	showOrderingPhysicianDialog: boolean = false;
	setShowOrderingPhysicianDialog() {
		this.showOrderingPhysicianDialog = true;
	}

	showDMEProviderDialog: boolean = false;
	setShowDMEProviderDialog() {
		this.showDMEProviderDialog = true;
	}

	showMemberHistoryDialog: boolean = false;
	setShowMemberHistoryDialog() {
		this.showMemberHistoryDialog = true;
	}

	showProductNotesDialog: boolean = false;
	setShowProductNotesDialog(event){
		event.stopPropagation();
		this.showProductNotesDialog = true;
	}

	showAuthNotesDialog: boolean = false;
	setShowAuthNotesDialog(){
		this.showAuthNotesDialog = true;
	}

	showSpecialInstructionsDialog: boolean = false;
	setShowSpecialInstructionsDialog(){
		this.showSpecialInstructionsDialog = true;
	}


	updateProductNoteType(){};

//json objects data:

public productNoteType: ILookupObject;
public productNoteTypeLookup: ILookupObject[] = [
	{
		key: 1,
		value: 'Clinical'
	},
	{
		key: 2,
		value: 'Follow-up'
	},
	{
		key: 3,
		value: 'MD Review'
	},

];

public productNote: IAuthDetailsProductNote;

public authNotesGridData: IAuthDetailsProductNote[] = [
	{
        id: 100,
		noteTypeId: 1,
		noteTypeText: 'Clinical',
        creator: 'Adv. User2',
		createdDate: new Date('01/06/2016'),
		noteText: 'Oxygen concentrator'
	},
	{
        id: 101,
		noteTypeId: 2,
		noteTypeText: 'Follow-up',
        creator: 'Adv. User2',
		createdDate: new Date('02/06/2016'),
		noteText: 'New Oxygen concentrator'
	},
	{
        id: 100,
		noteTypeId: 1,
		noteTypeText: 'Clinical',
        creator: 'Adv. User2',
		createdDate: new Date('01/06/2016'),
		noteText: 'Oxygen concentrator'
	},
	{
        id: 101,
		noteTypeId: 2,
		noteTypeText: 'Follow-up',
        creator: 'Adv. User2',
		createdDate: new Date('02/06/2016'),
		noteText: 'New Oxygen concentrator'
	},
	{
        id: 100,
		noteTypeId: 1,
		noteTypeText: 'Clinical',
        creator: 'Adv. User2',
		createdDate: new Date('01/06/2016'),
		noteText: 'Oxygen concentrator'
	},
	{
        id: 101,
		noteTypeId: 2,
		noteTypeText: 'Follow-up',
        creator: 'Adv. User2',
		createdDate: new Date('02/06/2016'),
		noteText: 'New Oxygen concentrator'
	},
	{
        id: 100,
		noteTypeId: 1,
		noteTypeText: 'Clinical',
        creator: 'Adv. User2',
		createdDate: new Date('01/06/2016'),
		noteText: 'Oxygen concentrator'
	},
	{
        id: 101,
		noteTypeId: 2,
		noteTypeText: 'Follow-up',
        creator: 'Adv. User2',
		createdDate: new Date('02/06/2016'),
		noteText: 'New Oxygen concentrator'
	},	{
        id: 100,
		noteTypeId: 1,
		noteTypeText: 'Clinical',
        creator: 'Adv. User2',
		createdDate: new Date('01/06/2016'),
		noteText: 'Oxygen concentrator'
	},
	{
        id: 101,
		noteTypeId: 2,
		noteTypeText: 'Follow-up',
        creator: 'Adv. User2',
		createdDate: new Date('02/06/2016'),
		noteText: 'New Oxygen concentrator'
	},
	{
        id: 102,
		noteTypeId: 2,
		noteTypeText: 'MD Review',
        creator: 'Adv. User2',
		createdDate: new Date('03/06/2016'),
		noteText: 'Adjusted Unit'
	}];


public productNotesGridData: IAuthDetailsProductNote[] = [
	{
        id: 100,
		noteTypeId: 2,
		noteTypeText: 'Clinical',
        creator: 'Adv. User2',
		createdDate: new Date('01/06/2016'),
		noteText: 'Oxygen concentrator'
	},
	{
        id: 101,
		noteTypeId: 1,
		noteTypeText: 'Follow-up',
        creator: 'Adv. User2',
		createdDate: new Date('02/06/2016'),
		noteText: 'New Oxygen concentrator'
	},
	{
        id: 102,
		noteTypeId: 1,
		noteTypeText: 'MD Review',
        creator: 'Adv. User2',
		createdDate: new Date('03/06/2016'),
		noteText: 'Adjusted Unit'
	},
	{
        id: 103,
		noteTypeId: 1,
		noteTypeText: 'Follow-up',
        creator: 'Adv. User2',
		createdDate: new Date('04/06/2016'),
		noteText: 'Found lost item in the wrong spot under the unit'
	}];

public memberHistoryGridData: IAuthDetailsMemberHistory[] = [
	{
		id: 100,
		authDate: new Date('01/06/2016'),
		authNumber: 'D2016110600111',
		dmeProvider: 'ABC Provider',
		hcpcs: 'E1391',
		mod: 'RR',
		description: 'Oxygen concentrator',
		reqUnits: 1,
		allowedUnits: 1,
		um: 'Piece',
		startDate: new Date('03/07/2017'),
		endDate: new Date('06/06/2017'),
		status: 'Approved'
	},
	{
		id: 100,
		authDate: new Date('12/31/2016'),
		authNumber: 'D2016110600111',
		dmeProvider: 'Larel Provider',
		hcpcs: 'E1390',
		mod: 'RR',
		description: 'Oxygen concentrator',
		reqUnits: 1,
		allowedUnits: 1,
		um: 'Piece',
		startDate: new Date('03/07/2017'),
		endDate: new Date('06/06/2017'),
		status: 'Denied'
	},
	{
		id: 100,
		authDate: new Date('02/06/2016'),
		authNumber: 'D2016110600111',
		dmeProvider: 'Sooto Provider',
		hcpcs: 'E1392',
		mod: 'RR',
		description: 'Oxygen concentrator',
		reqUnits: 1,
		allowedUnits: 1,
		um: 'Piece',
		startDate: new Date('03/07/2017'),
		endDate: new Date('06/06/2017'),
		status: 'Approved'
	},
	{
		id: 100,
		authDate: new Date('05/06/2016'),
		authNumber: 'D2016110600111',
		dmeProvider: 'Grant Provider',
		hcpcs: 'E1393',
		mod: 'RR',
		description: 'Oxygen concentrator',
		reqUnits: 1,
		allowedUnits: 1,
		um: 'Piece',
		startDate: new Date('03/07/2017'),
		endDate: new Date('06/06/2017'),
		status: 'Approved'
	}];


public authDetailsGridData: IAuthDetailsDmeProduct[] = [
	{
		authorizationID: "1",
        authorizationDetailID: "1",
        specialty: 'Respiratory',
        hcpcCodeID: 'E1390',
        mod: "JJ",  //?
        description: 'Oxygen concentrator',  //?
        requestedUnits: 1,
        allowedUnits: 1,
        um: 'Piece',  //?
        effectiveFromDate: new Date('03/07/2017'),
        effectiveToDate: new Date('06/06/2017'),
        authorizationDetailStatusName: 'Approved',
        pendingReasonName: 'Approved'
      }
];

public requestApprovalData: any = {
authType: 'Authorization',
authNumber: 'D20170111113857',
startDate: new Date('03/07/2017 11:35 AM'),
creationDate: new Date('03/07/2017 11:35 AM'),
urgency: 'Standard',
authStatusType: 'Status',
authStatus: 'Approved',
effectiveDates: '03/07/2017-06/06/2017',
orderingPhysician: 'Dr. Dru Kimber',
referralSource: 'Dr. Mary White',
memberHt: '5 ft 8 in',
memberWt: '159 lbs'
};

public specialInstructionsData: string = 'Member is out of town until 3/20/2018 to see the solar eclipse. A solar eclipse (as seen from the planet Earth) is a type of eclipse that occurs when the Moon passes between the Sun and Earth, and when the Moon fully or partially blocks ("occults") the Sun. This can happen only at new moon when the Sun and the Moon are in conjunction as seen from Earth in an alignment referred to as syzygy. In a total eclipse, the disk of the Sun is fully obscured by the Moon. In partial and annular eclipses, only part of the Sun is obscured.  If the Moon were in a perfectly circular orbit, a little closer to the Earth, and in the same orbital plane, there would be total solar eclipses every new moon. However, since the Moons orbit is tilted at more than 5 degrees to the Earths orbit around the Sun, its shadow usually misses Earth. The Moons orbit must cross Earths ecliptic plane in order for an eclipse (both solar as well as lunar) to occur. In addition, the Moons actual orbit is elliptical, often taking it far enough away from Earth that its apparent size is not large enough to block the Sun entirely. The orbital planes cross each other at a line of nodes resulting in at least two, and up to five, solar eclipses occurring each year; no more than two of which can be total eclipses.[1][2] However, total solar eclipses are rare at any particular location because totality exists only along a narrow path on the Earths surface traced by the Moons shadow or umbra.';
public specialInstructionsPrefix: string = this.specialInstructionsData.length > 74 ? this.specialInstructionsData.substring(0,75) : this.specialInstructionsData;


public productLineDetailsData: any = {
authCreated: new Date('03/05/2017 11:35 AM'),
authNo: 'D2017011300100',
specialty: 'Respiratory',
hcpc: 'E1390',
mod: 'RR',
description: 'Oxygen concentrator',
reqUnits: 1,
allowedUnits: 1,
um: 'Piece',
startDate: new Date('03/17/2017 11:35 AM'),
endDate: new Date('05/15/2017 11:35 AM'),
status: 'Pending',
pendingReason: 'MD Review',
dateApproved: '',
dateDenied: '',
deniedReason: '',
dateCanceled: '',
canceledReason: '',
dmeProviderNote: 'The member has lost the wheelchair from last request.'
};


public demographicsData: any = {
paAddress1: '123 Front Street',
paAddress2: '',
paCity: 'Nashville',
paState: 'TN',
paCounty: 'Davidson',
paZip: '37221',
maAddress1: '123 Front Street',
maAddress2: '',
maCity: 'Nashville',
maState: 'TN',
maCounty: 'Davidson',
maZip: '37221',
phone: '(615)555-3333',
alternatePhone: '(615)444-2233',
alternateContact: 'Pat Peterson',
alternateContactPhone: '(615)335-3333'
};


public diagnosisData: any = {
diag1Code: 'A15',
diag1Text: 'Tuberculosis of lung',
diag2Code: 'G12.22',
diag2Text: 'Progressive bulbar palsy',
diag3Code: '',
diag3Text: '',
diag4Code: '',
diag4Text: '',
diag5Code: '',
diag5Text: '',
diag6Code: '',
diag6Text: ''
};

public referralSourceData: any = {
npi: '4726483901',
referralType: 'Facility',
businessName: 'Heritabe Medical',
address1: '123 Front Street',
address2: '',
city: 'Nashville',
state: 'TN',
county: 'Davidson',
zip: '37221',
phone: '(615)555-3232',
fax: '(615)423-3232',
contactName: 'Paul Smith'
};

public orderingPhysicianData: any = {
npi: '4726483901',
physician: 'Dr. Mary White',
businessName: 'Heritabe Medical',
address1: '123 Front Street',
address2: '',
city: 'Nashville',
state: 'TN',
county: 'Davidson',
zip: '37221',
phone: '(615)555-3232',
fax: '(615)423-3232',
contactName: 'Paul Smith'
};

public dmeProviderData: any = {
npi: '4726483901',
businessName: 'Heritabe Medical',
address1: '123 Front Street',
address2: '',
city: 'Nashville',
state: 'TN',
county: 'Davidson',
zip: '37221',
phone: '(615)555-3232',
fax: '(615)423-3232',
contactName: 'Paul Smith'
};

public RequestData: any = [
	{
		createdOn: new Date('01/06/2016'),
		requestNumber: 'R20170111113857',
		providerName: 'ABC Provider',
		orderingPhysicianName: 'Dr Barry',
		urgencyName: 'Standard',
		requestStatusName: 'Approved'
	},
		{
		createdOn: new Date('01/06/2016'),
		requestNumber: 'R20170111113857',
		providerName: 'ABC Provider',
		orderingPhysicianName: 'Dr Barry',
		urgencyName: 'Standard',
		requestStatusName: 'Approved'
	},
		{
		createdOn: new Date('01/06/2016'),
		requestNumber: 'R20170111113857',
		providerName: 'ABC Provider',
		orderingPhysicianName: 'Dr Barry',
		urgencyName: 'Standard',
		requestStatusName: 'Approved'
	},
		{
		createdOn: new Date('01/06/2016'),
		requestNumber: 'R20170111113857',
		providerName: 'ABC Provider',
		orderingPhysicianName: 'Dr Barry',
		urgencyName: 'Standard',
		requestStatusName: 'Approved'
	},
		{
		createdOn: new Date('01/06/2016'),
		requestNumber: 'R20170111113857',
		providerName: 'ABC Provider',
		orderingPhysicianName: 'Dr Barry',
		urgencyName: 'Standard',
		requestStatusName: 'Approved'
	}];






public AuthData: any = [
	{
		createdOn: new Date('01/06/2016'),
		authorizationNumber: 'D20170111113857',
		providerName: 'ABC Provider',
		orderingPhysicianName: 'Dr Barry',
		urgencyName: 'Standard',
		queueName: 'PDS',
		authorizationStatusName: 'Approved'
	},
	{
		createdOn: new Date('01/06/2016'),
		authorizationNumber: 'D20170111113857',
		providerName: 'ABC Provider',
		orderingPhysicianName: 'Dr Barry',
		urgencyName: 'Standard',
		queueName: 'PDS',
		authorizationStatusName: 'Approved'
	},
		{
		createdOn: new Date('01/06/2016'),
		authorizationNumber: 'D20170111113857',
		providerName: 'ABC Provider',
		orderingPhysicianName: 'Dr Barry',
		urgencyName: 'Standard',
		queueName: 'PDS',
		authorizationStatusName: 'Approved'
	},
		{
		createdOn: new Date('01/06/2016'),
		authorizationNumber: 'D20170111113857',
		providerName: 'ABC Provider',
		orderingPhysicianName: 'Dr Barry',
		urgencyName: 'Standard',
		queueName: 'PDS',
		authorizationStatusName: 'Approved'
	},
		{
		createdOn: new Date('01/06/2016'),
		authorizationNumber: 'D20170111113857',
		providerName: 'ABC Provider',
		orderingPhysicianName: 'Dr Barry',
		urgencyName: 'Standard',
		queueName: 'PDS',
		authorizationStatusName: 'Approved'
	},
		{
		createdOn: new Date('01/06/2016'),
		authorizationNumber: 'D20170111113857',
		providerName: 'ABC Provider',
		orderingPhysicianName: 'Dr Barry',
		urgencyName: 'Standard',
		queueName: 'PDS',
		authorizationStatusName: 'Approved'
	}];



}



