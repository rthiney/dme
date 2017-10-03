
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  ComponentFactory,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { dynamicComponentMap } from './dynamic-component-map';

/*
List dynamic components imports here.
Also remember to include them in entryComponents array and DynamicComponentMap.
*/
import { RequestsWidgetComponent } from './../../widgets/requests-widget/requests-widget.component';
import { AuthorizationsWidgetComponent } from './../../widgets/authorizations-widget/authorizations-widget.component';
import { AuthorizationDetailsWidgetComponent } from "@app/widgets/authorization-details-widget/authorization-details-widget.component";
import { DmeProductsWidgetComponent } from "@app/widgets/dme-products-widget/dme-products-widget.component";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-component',
  template: '<div #container></div>',
  entryComponents: [
    RequestsWidgetComponent,
    AuthorizationsWidgetComponent,
    AuthorizationDetailsWidgetComponent,
    DmeProductsWidgetComponent
  ]
})
// tslint:disable-next-line:component-class-suffix
export class DynamicComponent implements OnInit {
  private componentRef: ComponentRef<any>;
  private currentComponent: any;

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  @Output() output: EventEmitter<{}> = new EventEmitter();

  // component: Class name for the component you want to create
  // inputs: An object with key/value pairs mapped to input name/input value
  // output: An event emitter.
  @Input() set component(data: {
    component: any,
    inputs: any,
    output: any
  }) {
    if (!data) {
      return;
    }

    // Inputs need to be in the following format to be resolved properly
    let inputProviders = Object.keys(data.inputs).map((inputName) => {
      return {
        provide: inputName,
        useValue: data.inputs[inputName]
      };
    });

    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(dynamicComponentMap[data.component]);

    this.componentRef = this.container.createComponent(factory);

    // Setup component input parameters
    if (data.inputs) {
      for (let key in data.inputs) {
        if (data.inputs.hasOwnProperty(key)) {
          // console.log(key + ' -> ' + JSON.stringify(data.inputs[key]));
          this.componentRef.instance[key] = data.inputs[key];
        }
      }
    }

    // Setup component output parameter
    if (data.output) {
      // this.componentRef.instance[data.output].subscribe(output => console.log(output));
      this.componentRef.instance[data.output].subscribe(_output =>
        this.output.emit({
          data: _output
        }));
    }

    // We can destroy the old component by calling destroy
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = this.componentRef;
  }

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void { }
}








