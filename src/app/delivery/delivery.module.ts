import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConnectedModule} from '@flfr-app/connected.module';
import {DeliveryChartComponent} from '@flfr-app/delivery/components/delivery-chart/delivery-chart.component';
import {DeliveryFeesComponent} from '@flfr-app/delivery/components/delivery-fees/delivery-fees.component';
import {DeliveryFormComponent} from '@flfr-app/delivery/components/delivery-form/delivery-form.component';
import {DeliveryContainerComponent} from '@flfr-app/delivery/containers/delivery-container/delivery-container.component';
import {DeliveryFeesContainerComponent} from '@flfr-app/delivery/containers/delivery-fees-container/delivery-fees-container.component';
import {DeliveryService} from '@flfr-app/delivery/services/delivery.service';
import {Ng2CompleterModule} from 'ng2-completer';
import {DeliveryComponent} from './containers/delivery/delivery.component';

import {DeliveryRoutingModule} from './delivery-routing.module';


@NgModule({
  declarations: [
    DeliveryComponent,
    DeliveryContainerComponent,
    DeliveryChartComponent,
    DeliveryFormComponent,
    DeliveryFeesContainerComponent,
    DeliveryFeesComponent
  ],
  imports: [
    DeliveryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConnectedModule,
    Ng2CompleterModule
  ],
  providers: [
    DeliveryService
  ]
})
export class DeliveryModule {
}
