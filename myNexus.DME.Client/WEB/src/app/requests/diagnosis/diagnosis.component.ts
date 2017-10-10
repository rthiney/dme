import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
	DataTableModule, SharedModule, DialogModule, ButtonModule
	, DropdownModule, Button, Dropdown, SelectItem, CheckboxModule
  , DataTable, Column, FileUploadModule, InputTextModule
  , InputTextareaModule, InputMaskModule, AutoCompleteModule
  } from 'primeng/primeng';
  import { DataService } from '@app/services/data.service';
  import { DiagnosisService } from '@app/services/diagnosis.service';
  


@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DiagnosisComponent implements OnInit {

  constructor(private dataService: DataService, private diagnosisService: DiagnosisService) { }

  ngOnInit() {
  }

  public ds: DataService;

  	//diagnosis
	public diag1: any;
	public diag2: any;
	public diag3: any;
	public diag4: any;
	public diag5: any;
  public diag6: any;
  
  public filteredDiag1List: any[] = []; 
  public filteredDiag2List: any[] = [];
  public filteredDiag3List: any[] = [];
  public filteredDiag4List: any[] = [];
  public filteredDiag5List: any[] = [];
  public filteredDiag6List: any[] = [];

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

  public diag1Selected(){
    //validate no other diag has this item selected
  }
  public diag2Selected(){
    //validate no other diag has this item selected
  }
  public diag3Selected(){
    //validate no other diag has this item selected
  }
  public diag4Selected(){
    //validate no other diag has this item selected
  }
  public diag5Selected(){
    //validate no other diag has this item selected
  }
  public diag6Selected(){
    //validate no other diag has this item selected
  }









}
