import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {SectionTextComponent} from '@flfr-app/component/section-text-home/section-text.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    ServiceWorkerModule,
    RouterModule,
  ],
  declarations: [
    SectionTextComponent
  ],
  providers: [],
  exports: [
    TranslateModule,
    CommonModule,
    ServiceWorkerModule,
    RouterModule,
    SectionTextComponent
  ]
})
export class ConnectedModule {
}
