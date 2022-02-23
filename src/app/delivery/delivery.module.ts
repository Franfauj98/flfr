import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DeliveryContainerComponent} from '@flfr-app/delivery/containers/delivery-container/delivery-container.component';
import {DeliveryComponent} from './containers/delivery/delivery.component';

import {DeliveryRoutingModule} from './delivery-routing.module';


@NgModule({
  declarations: [
    DeliveryComponent,
    DeliveryContainerComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule
  ]
})
export class DeliveryModule {
}
