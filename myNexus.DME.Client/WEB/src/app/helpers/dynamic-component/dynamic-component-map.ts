import { AuthorizationsWidgetComponent } from './../../widgets/authorizations-widget/authorizations-widget.component';
import { RequestsWidgetComponent } from './../../widgets/requests-widget/requests-widget.component';
import { AuthorizationDetailsWidgetComponent } from "@app/widgets/authorization-details-widget/authorization-details-widget.component";
import { DmeProductsWidgetComponent } from "@app/widgets/dme-products-widget/dme-products-widget.component";

/*
List dynamic components imports here.
Also remember to include them in entryComponents array of DynamicComponent.
*/
export const dynamicComponentMap = {
  requests: RequestsWidgetComponent,
  authorizations: AuthorizationsWidgetComponent,
  authorization_details: AuthorizationDetailsWidgetComponent, //in the db, this is called auth
  dme_products: DmeProductsWidgetComponent                    //in the db, this is called authDetails
};
