import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactContainerComponent} from '@flfr-app/contacts/containers/contact-container/contact-container.component';

const routes: Routes = [{path: '', component: ContactContainerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {
}
