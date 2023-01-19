import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';

import {MobileRoutingModule} from './mobile-routing.module';
import {MobileComponent} from "@flfr-app/mobile-new-nav/containers/mobile/mobile.component";
import {
  MobileContainerComponent
} from "@flfr-app/mobile-new-nav/containers/mobile-container/mobile-container.component";
import {GalleriaModule} from "primeng/galleria";


@NgModule({
  declarations: [
    MobileComponent,
    MobileContainerComponent
  ],
    imports: [
        CommonModule,
        MobileRoutingModule,
        DividerModule,
        ButtonModule,
        CardModule,
        TranslateModule,
        GalleriaModule
    ]
})
export class MobileModule {
}
