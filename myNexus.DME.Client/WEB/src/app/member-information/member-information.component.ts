import { Component, OnInit, Output, OnDestroy, Input, ElementRef } from '@angular/core';
import { memberInformationRoutes } from './member-information.routing';
import { DynamicControllerUtilities } from './../helpers/dynamic-component/dynamic-component-utilities';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { NgForm, NgModel} from '@angular/forms';
import {NotesComponent} from './notes/notes.component';

import {
	DataTableModule, SharedModule, DialogModule, ButtonModule
	, DropdownModule, Button, Dropdown, SelectItem, CheckboxModule
  , DataTable, Column, FileUploadModule, InputTextModule
  , InputTextareaModule, InputMaskModule, AutoCompleteModule
	} from 'primeng/primeng';


import { MemberInformation } from './member-information';
import { MemberInformationService } from './member-information.service';
import { Subscription } from "rxjs/Rx";
import { DataService } from '@app/services/data.service';
import { DiagnosisService } from '../services/diagnosis.service';
import { SearchCriteria } from '../member-search-input/search-criteria';
import { ILookupObject } from '@entities/interfaces/i-lookup-object';

import { DiagnosisComponent } from '@app/requests/diagnosis/diagnosis.component';
import { PhonePipe } from '@app/pipes/phone/phone.pipe';
import { ZipPipe } from '@app/pipes/zip/zip.pipe';



@Component({
  selector: 'member-information',
  templateUrl: './member-information.component.html',
  styleUrls: ['./member-information.component.css']
})

export class MemberInformationComponent implements OnInit {
  private memberInformation: MemberInformation;
  private components: any;
  private array: ArrayConstructor = Array;
  searchCriteria = new SearchCriteria();
  showTemplate: boolean = true;
  isMessage:boolean = false;
  isExternalUser: boolean = true;
  isInternalUser: boolean = false;
  isMemberIDSearch: boolean = false;
  isAuthNoSearch: boolean = false;
  isRequestNoSearch: boolean = false;  
  public selectedStep: number;

	public diagnosisLookup: SelectItem[] = [];
	public documentsSignedOrderDate: Date;
	public documentsSupportingDocumentationDate: Date;
	public selectDocumentsToUploadData: any[] = [];
	public uploadedFiles: any[] = [];
  public showDocumentsPage1: boolean = true;
  public isUserInternal: boolean = true;
  public generalStartDate: Date;
  public generalEffectiveDateRange: Date[];
  public generalUrgency: string;
  public generalMemberWeight: number;
  public generalMemberHeightFeet: number;
  public generalMemberHeightInches: number;
  public generalSpecialInstructions: string;

  //demographics
  public alternateContactPhone: string;
  public demographicsAlternatePhone: string;
  public demographicsPhone: string;
  public demographicsPaAddress1: string;
  public demographicsPaAddress2: string;
  public demographicsPaCity: string;
  public demographicsPaState: string;
  public demographicsPaCounty: string;
  public demographicsPaZip: string;

  public demographicsMaAddress1: string;
  public demographicsMaAddress2: string;
  public demographicsMaCity: string;
  public demographicsMaState: string;
  public demographicsMaCounty: string;
  public demographicsMaZip: string;

  public demographicsMaAlternateContact: string;
  public ds: DataService;

  public constructor(private elRef: ElementRef,private route: ActivatedRoute
    , private memberInformationService: MemberInformationService, private router: Router
    , private dataService: DataService, private diagnosisService: DiagnosisService) {

      this.diag1 = { label: 'G12.8 Other spional muscular atrophies and related syndromes ', value: 3 };
      this.diag2 = { label: 'G12.8 Other spional muscular atrophies and related syndromes ', value: 3 };
      this.diag3 = null;
     }

	ngOnInit(): void {

    this.loadDiagnosisLookup();
    this.loadDiagnosisStringLookup();
    this.loadSelectDocumentsToUploadData(); 
    this.setInitialFormData();
    this.diag1 = { label: 'G12.8 Other spional muscular atrophies and related syndromes ', value: 3 };
    this.diag2 = { label: 'G12.8 Other spional muscular atrophies and related syndromes ', value: 3 };

    this.route.queryParams.subscribe(p => {
      this.memberInformation = {        
        messages: (p.messages) ? JSON.parse(p.messages) : null,
        member: (p.member) ? JSON.parse(p.member) : null,
        requests: (p.requests) ? JSON.parse(p.requests) : null,
        authorizations: (p.authorizations) ? JSON.parse(p.authorizations) : null,
        widgets: JSON.parse(p.widgets),
        authorizationDetails: null,
        dmeProducts: []
      }     
      
      /*
      TODO: 
      let authorizationId: any
      if (authorizations.length > 0){
         authorizationId = authorizations[0].AuthorizationID
         //make a call to the server to get authorization details indormation and dme products
         // for example 
         memberInformation.authorizationDetails = http.getAuthorizationbyId(authorizationId);
         memberInformation.dmeProducts = http.getAuthorizationDeatilsbyAuthorizationId(authorizationId);
         this.memberInformation.widgets.push('authorization_details') // Must come from the server, if this is resolved by workflolw engine 
      }
      else if (requests.length > 0){
        get request data see example for authorizarization
      }
      */

      this.memberInformation.widgets.push('authorization_details');      //these 2 have been added in DNA:  C:\tfs3\Development\myNexus.DNA\myNexus.DNA.Web\Controllers\WorkflowController.cs  line 78
      this.memberInformation.widgets.push('dme_products'); 

      this.components = this.memberInformationService.getComponents(this.memberInformation);
      
      this.dataService.currentSearchCriteria.subscribe(searchCriteria => this.searchCriteria = searchCriteria);
      console.log(this.searchCriteria.searchType);
      console.log(this.components);
    });    
  }

   private getOutput(callback) {
	   console.log(callback);
                                                                        // Navigation to auth-details page
    let navigationExtras: NavigationExtras = {
      queryParams: {
        viewType: JSON.stringify(callback.data.viewType),               // viewType.auth = 1, request=2
        authId: JSON.stringify(callback.data.id)        
      }
    };
    //this.router.navigate(['/auth-detail'],  navigationExtras );


    


  } 

  private editAuthorizationDetails(authorizationDetails: any){

  }
  
  setNoRecords(){                                                       // todo: we are going to create a generic message control
    if(this.memberInformation.member == null)
    {
      console.log(this.searchCriteria.searchType);
      
                                                                        //todo: add logic so set user type when the user session will support it

      switch (this.searchCriteria.searchType) 
      { 
        case'subscriberNumber': 
            this.isMemberIDSearch = true;            
            this.isAuthNoSearch = false;
            this.isRequestNoSearch = false;   
        break; 
        case'authorizationNumber': 
            this.isAuthNoSearch = true;
            this.isMemberIDSearch = false;           
            this.isRequestNoSearch = false;   
        break;
        case'requestNumber': 
            this.isRequestNoSearch = true;
            this.isMemberIDSearch = false;
            this.isAuthNoSearch = false;              
        break;
      }
      
      return true;
    }
    else
    {
      this.isMemberIDSearch = false;
      this.isAuthNoSearch = false;
      this.isRequestNoSearch = false;       
      return false;
    }
    
   }



   //requests modal.................................................................
   
   onWizardComplete(event){
    const myString: string = "";
   }


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


	//diagnosis
	public diag1: any;
	public diag2: any;
	public diag3: any;
	public diag4: any;
	public diag5: any;
	public diag6: any;


	loadDiagnosisLookup() {
		this.diagnosisLookup.push({ label: 'G12.0 Infantile spinal muscular atrophy, type 1 ', value: 1 });
		this.diagnosisLookup.push({ label: 'G12.1 Other inherited spinal muscular atrophy ', value: 2 });
		this.diagnosisLookup.push({ label: 'G12.8 Other spional muscular atrophies and related syndromes ', value: 3 });
		this.diagnosisLookup.push({ label: 'G12.9 Spinal muscular atrophy, unspecified ', value: 4 });
  }

  public diagnosisStringLookup: string[] = [];

/*   public country: any;  
  public countries: any[]; */   
  //public filteredDiagnosisList: any[];  
  public filteredDiag1List: any[] = []; 
  public filteredDiag2List: any[] = [];
  public filteredDiag3List: any[] = [];
  public filteredDiag4List: any[] = [];
  public filteredDiag5List: any[] = [];
  public filteredDiag6List: any[] = [];



  loadDiagnosisStringLookup(){
    this.diagnosisStringLookup.push('G12.0 Infantile spinal muscular atrophy, type 1 ');
    this.diagnosisStringLookup.push('G12.1 Other inherited spinal muscular atrophy ');
    this.diagnosisStringLookup.push('G12.8 Other spional muscular atrophies and related syndromes ');
    this.diagnosisStringLookup.push('G12.9 Spinal muscular atrophy, unspecified ');
    this.diagnosisStringLookup.push('G11.0 Infantile spinal muscular atrophy, type 1 ');
    this.diagnosisStringLookup.push('G11.1 Other inherited spinal muscular atrophy ');
    this.diagnosisStringLookup.push('G11.8 Other spional muscular atrophies and related syndromes ');
    this.diagnosisStringLookup.push('G10.9 Spinal muscular atrophy, unspecified ');
    this.diagnosisStringLookup.push('G10.0 Infantile spinal muscular atrophy, type 1 ');
    this.diagnosisStringLookup.push('G10.1 Other inherited spinal muscular atrophy ');
    this.diagnosisStringLookup.push('G13.8 Other spional muscular atrophies and related syndromes ');
    this.diagnosisStringLookup.push('G13.9 Spinal muscular atrophy, unspecified ');
  }

  

  filterDiagnosisSingle(event, diagnosisNumber: number) {
    let query = String(event.query);    //  period is %2E, causing problems in api 500 server error
    this.diagnosisService.getDiagnosisByContainsCodeOrDescription(query).subscribe(response => {
      console.log(response.result);
      let result = [{description:null}];
      response.result.forEach(e => {
        if(e.code.trim().length > 0 && e.description.trim().length > 0){
          result.push({description: e.code + ' ' + e.description});
        }
      });
      //filteredDiagnosisList = result;

      switch (diagnosisNumber) {
        case 1: 
        this.filteredDiag1List = result; 
        break;
        case 2:
        this.filteredDiag2List = result; 
        break;
        case 3: 
        this.filteredDiag3List = result;  
        break;
        case 4:
        this.filteredDiag4List = result; 
        break;
        case 5:
        this.filteredDiag5List = result;   
        break;
        case 6:
        this.filteredDiag6List = result; 
        break;
      };

    });
  }



  //filterDiagnosisList(query, diagnosisListFull: any[]):any[] {
  //    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
  //    let filtered : any[] = [];
  //    for(let i = 0; i < diagnosisListFull.length; i++) {
  //        let diag = diagnosisListFull[i];
  //        if(diag.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
  //            filtered.push(diag);
  //        }
  //    }
  //    return filtered;
  //} 


	loadSelectDocumentsToUploadData() {
		this.selectDocumentsToUploadData.push({ fileName: 'Signed Order.pdf', documentType: 'Signed Order', description: 'Signed order for approval', fileSize: '149 KB', isAcknowledged: false });
		this.selectDocumentsToUploadData.push({ fileName: 'Signed Order2.pdf', documentType: 'Signed Order2', description: 'Signed order for approval2', fileSize: '135 KB', isAcknowledged: false });
		this.selectDocumentsToUploadData.push({ fileName: 'Signed Order3.pdf', documentType: 'Signed Order3', description: 'Signed order for approval3', fileSize: '121 KB', isAcknowledged: false });
	}

	setShowUploadPage2() {
		this.showDocumentsPage1 = this.showDocumentsPage1 == true ? false : true;
  }
  
  getCurrentStepNumber(){
    var hElement: HTMLElement = this.elRef.nativeElement; 
    var allDivs = hElement.getElementsByClassName('active');
    var activeStepDiv: HTMLElement;
    let activeStepNumber: number;
    for (var i = 0; i < allDivs.length; i++) {
      if(allDivs[i].className == 'step-pane active'){
        activeStepDiv = allDivs[i] as HTMLElement;
        let k: number = 0;
        activeStepNumber = parseInt(activeStepDiv.dataset.step);
      }
     }
     return activeStepNumber;
  }


  toggleInternalExternalUser(){
    this.isUserInternal = this.isUserInternal == true ? false : true;
  }

  setInitialFormData(){
    this.generalStartDate = new Date('01/15/2017 08:00:00 AM');

    this.demographicsPhone = '1112223333';

    this.alternateContactPhone = '4048881212';
    this.demographicsAlternatePhone = '4048881212';
    this.demographicsPhone = '4048881212';
    this.demographicsPaAddress1 = '123 My Rd.';
    this.demographicsPaAddress2 = '1414 Franklin Rd.';
    this.demographicsPaCity = 'Nashville';
    this.demographicsPaState = 'Tn';
    this.demographicsPaCounty = 'Cobb';
    this.demographicsPaZip = '301014455';
  
    this.demographicsMaAddress1 = '36 Old Hickory Way';
    this.demographicsMaAddress2 = 'Suite 100';
    this.demographicsMaCity = 'Nashville';
    this.demographicsMaState = 'Tn';
    this.demographicsMaCounty = 'Polk';
    this.demographicsMaZip = '30125';

    this.demographicsMaAlternateContact = 'Joe Jackson';
  }
}
