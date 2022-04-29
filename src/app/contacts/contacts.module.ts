import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {ContactPannelComponent} from './components/contact-pannel/contact-pannel.component';

import {ContactsRoutingModule} from './contacts-routing.module';
import {ContactContainerComponent} from './containers/contact-container/contact-container.component';
import {ContactsComponent} from './containers/contacts/contacts.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactPannelComponent,
    ContactContainerComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    DividerModule,
    ButtonModule,
    CardModule
  ]
})
export class ContactsModule {
}
