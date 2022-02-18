import {NgModule} from '@angular/core';
import {CardHomeComponent} from '@flfr-app/home-page/components/card-home/card-home.component';
import {MapComponent} from '@flfr-app/home-page/components/map-home/map.component';
import {QuickInfoElementComponent} from '@flfr-app/home-page/components/quick-info-element-home/quick-info-element.component';
import {QuickInfoComponent} from '@flfr-app/home-page/components/quick-info-home/quick-info.component';
import {HomeContainerComponent} from '@flfr-app/home-page/containers/home/home-container.component';
import {MorePicturesComponent} from '@flfr-app/home-page/components/more-pictures/more-pictures.component';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {ServiceWorkerModule} from '@angular/service-worker';
import {AppHomeComponent} from '@flfr-app/home-page/containers/app-home/app-home.component';
import {RouterModule} from '@angular/router';
import {AppHomeRoutingModule} from '@flfr-app/home-page/app-home-routing.module';

@NgModule({
  declarations: [
    AppHomeComponent,
    HomeContainerComponent,
    MorePicturesComponent,
    MapComponent,
    CardHomeComponent,
    QuickInfoComponent,
    QuickInfoElementComponent
  ],
  imports: [TranslateModule, CommonModule, ServiceWorkerModule, RouterModule, AppHomeRoutingModule],
  bootstrap: [AppHomeComponent]
})
export class AppHomeModule {
}
