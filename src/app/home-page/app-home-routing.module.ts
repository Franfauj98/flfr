import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from '@flfr-app/home-page/containers/home/home-container.component';

const routes: Routes = [
  {path: '', component: HomeContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppHomeRoutingModule {
}
