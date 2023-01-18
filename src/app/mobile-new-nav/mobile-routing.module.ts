import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  MobileContainerComponent
} from "@flfr-app/mobile-new-nav/containers/mobile-container/mobile-container.component";

const routes: Routes = [{path: '', component: MobileContainerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule {
}
