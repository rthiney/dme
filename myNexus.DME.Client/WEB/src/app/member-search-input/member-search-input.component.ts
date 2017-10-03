import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MemberSearchInputService } from './member-search-input.service';
import { AccountSessionManager } from './../helpers/account-session-manager';
import { DataService } from '../services/data.service';
import { SearchCriteria } from '../member-search-input/search-criteria';

@Component({
  selector: 'member-search-input',
  templateUrl: './member-search-input.component.html',
  styleUrls: ['./member-search-input.component.css']
})
export class MemberSearchInputComponent implements OnInit {
  @Output() data: EventEmitter<{}> = new EventEmitter();  

  private accounts: any[];
  private selectedAccount: string;
  private searchTypes: any[];
  private selectedSearchType: string;
  private searchValue: string;  
  private messages: string[] = [];
  searchCriteria = new SearchCriteria();

  providers: any[];

  constructor(private msiService: MemberSearchInputService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.setupSearchTypes();
    this.setupAccounts();   
    
    this.dataService.currentSearchCriteria.subscribe(searchCriteria => this.searchCriteria = searchCriteria)
  }

  public setAccountId(): void {
    // Get account id and store it in session variable
    AccountSessionManager.setAccountID(this.selectedAccount);
  }

  public search(): any {
    if (!this.validate()) {
      return false;
    }

    this.msiService.search(this.searchValue, this.selectedSearchType).subscribe(response => {
      let data = response.result;
      // This is what we expect from server
      this.data.emit({        
        member: data.Member,
        requests: data.Requests,
        authorizations: data.Authorizations,
        messages: data.Messages,
        widgets: data.Widgets
      });
     
      this.searchCriteria.searchType = this.selectedSearchType;
      this.dataService.changeSearchCriteria(this.searchCriteria);
    });
  }

  public validate(type?: string): boolean {
    switch (type) {
      case 'searchType': {
        return this.validateSearchType();
      }
      case 'account': {
        return this.validateAccount();
      }
      case 'searchValue': {
        return this.validateSearchValue();
      }
      default: {
        this.messages = [];
        this.validateSearchType();
        this.validateAccount();
        this.validateSearchValue();
        return !(this.messages.length > 0);
      }
    }
  }

  private isValid(value: any, message: string) {
    let index: number = this.messages.indexOf(message);
    if (index > -1) {
      this.messages.splice(index, 1);
    }
    if (!value) {
      this.messages.push(message);
    }
    return !(this.messages.indexOf(message) > -1);
  }

  private validateSearchType() {
    return this.isValid(this.selectedSearchType, 'Search By');
  }

  private validateAccount() {
    return this.isValid(this.selectedAccount, 'Account Required');
  }

  private validateSearchValue() {
    return this.isValid(this.searchValue, 'Search Value Required');
  }

  private setupSearchTypes(): void {
    this.searchTypes = [
      {
        name: 'search-type',
        value: 'subscriberNumber',
        label: 'Member ID'
      },
      {
        name: 'search-type',
        value: 'authorizationNumber',
        label: 'Authorization No.'
      },
      {
        name: 'search-type',
        value: 'requestNumber',
        label: 'Request No.'
      }
    ];
  }

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
}