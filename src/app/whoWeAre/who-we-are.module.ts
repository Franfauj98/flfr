import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {RippleModule} from 'primeng/ripple';
import {SectionTextImageComponent} from './components/section-text-image/section-text-image.component';
import {WhoWeAreContainerComponent} from './containers/who-we-are-container/who-we-are-container.component';
import {WhoWeAreComponent} from './containers/who-we-are/who-we-are.component';

import {WhoWeAreRoutingModule} from './who-we-are-routing.module';


@NgModule({
  declarations: [
    WhoWeAreComponent,
    WhoWeAreContainerComponent,
    SectionTextImageComponent
  ],
  imports: [
    CommonModule,
    WhoWeAreRoutingModule,
    DividerModule,
    ButtonModule,
    CardModule,
    RippleModule
  ]
})
export class WhoWeAreModule {
}
