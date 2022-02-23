import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeliveryContainerComponent} from '@flfr-app/delivery/containers/delivery-container/delivery-container.component';

const routes: Routes = [{path: '', component: DeliveryContainerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule {
}
