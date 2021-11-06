import {NgModule} from '@angular/core';
import {CardHomeComponent} from '@flfr-app/home-page/components/card-home/card-home.component';
import {HeaderComponent} from '@flfr-app/home-page/components/header/header.component';
import {HomeComponent} from '@flfr-app/home-page/containers/home/home.component';
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
    HomeComponent,
    HeaderComponent,
    MorePicturesComponent,
    CardHomeComponent
  ],
  imports: [TranslateModule, CommonModule, ServiceWorkerModule, RouterModule, AppHomeRoutingModule],
  bootstrap: [AppHomeComponent]
})
export class AppHomeModule {
}
