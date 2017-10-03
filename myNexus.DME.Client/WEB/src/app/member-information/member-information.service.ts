import { MemberInformation } from './member-information';
import { DynamicControllerUtilities } from './../helpers/dynamic-component/dynamic-component-utilities';
import { Injectable } from '@angular/core';

@Injectable()
export class MemberInformationService {
    private components: any[];

    constructor() { }

    // Will set up a data to be passed to dynamic component
    getComponents(memberInformation: MemberInformation) {
        this.components = [];
        // Enumerate thru each component and create only those provided in the list.
        let mi = memberInformation;
        for (let index = 0; index < mi.widgets.length; index++) {
            let widget = (mi.widgets[index]).toLowerCase();
            let data: any;
            let output: string;
            let showMe: boolean;
            switch (widget) {
                case 'requests': {
                    data = mi.requests;
                    output = 'output';
                    showMe = this.hasData(data);
                    break;
                }
                case 'authorizations': {
                    data = mi.authorizations;
                    output = 'output';
                    showMe = this.hasData(data);
                    break;
                }
                case 'authorization_details': {
                    data = [];          //check field like mi.authorizationDetails// must come from server; in the DB it's authorization
                    output = null;
                    showMe = true; 
                    break;
                }
                case 'dme_products': {
                    data = [];          //check field like mi.authorizationDetails// must come from server; in the DB it's authDetails
                    output = null;
                    showMe = true; 
                    break;
                }
            }
            this.components.push(DynamicControllerUtilities.setupParameters(widget, { data: data, showMe: showMe}, output));
        }
        return this.components;
    }

    private hasData(data) {
        return Array.isArray(data) && data.length > 0;
    }
}
