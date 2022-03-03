import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DeliveryChartComponent} from '@flfr-app/delivery/components/delivery-chart/delivery-chart.component';
import {DeliveryFormComponent} from '@flfr-app/delivery/components/delivery-form/delivery-form.component';
import {DeliveryContainerComponent} from '@flfr-app/delivery/containers/delivery-container/delivery-container.component';
import {DeliveryService} from '@flfr-app/delivery/services/delivery.service';
import {DeliveryComponent} from './containers/delivery/delivery.component';

import {DeliveryRoutingModule} from './delivery-routing.module';


@NgModule({
  declarations: [
    DeliveryComponent,
    DeliveryContainerComponent,
    DeliveryChartComponent,
    DeliveryFormComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DeliveryService
  ]
})
export class DeliveryModule {
}
