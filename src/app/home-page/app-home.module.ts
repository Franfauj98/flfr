import {NgModule} from '@angular/core';
import {ConnectedModule} from '@flfr-app/connected.module';
import {AppHomeRoutingModule} from '@flfr-app/home-page/app-home-routing.module';
import {CardHomeComponent} from '@flfr-app/home-page/components/card-home/card-home.component';
import {CarouselComponent} from '@flfr-app/home-page/components/carousel-home/carousel.component';
import {MapComponent} from '@flfr-app/home-page/components/map-home/map.component';
import {MorePicturesComponent} from '@flfr-app/home-page/components/more-pictures/more-pictures.component';
import {QuickInfoElementComponent} from '@flfr-app/home-page/components/quick-info-element-home/quick-info-element.component';
import {QuickInfoComponent} from '@flfr-app/home-page/components/quick-info-home/quick-info.component';
import {AppHomeComponent} from '@flfr-app/home-page/containers/app-home/app-home.component';
import {HomeContainerComponent} from '@flfr-app/home-page/containers/home/home-container.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppHomeComponent,
    HomeContainerComponent,
    MorePicturesComponent,
    MapComponent,
    CardHomeComponent,
    QuickInfoComponent,
    QuickInfoElementComponent,
    CarouselComponent
  ],
  imports: [
    AppHomeRoutingModule,
    ConnectedModule,
    CardModule,
    ButtonModule
  ],
  bootstrap: [AppHomeComponent]
})
export class AppHomeModule {
}
