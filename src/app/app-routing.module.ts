import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@flfr-app/home-page/app-home.module').then(m => m.AppHomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('@flfr-app/home-page/app-home.module').then(m => m.AppHomeModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
