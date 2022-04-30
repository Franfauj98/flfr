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
    loadChildren: () => import('@flfr-app/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'whoWeAre',
    loadChildren: () => import('@flfr-app/whoWeAre/who-we-are.module').then(m => m.WhoWeAreModule)
  },
  {
    path: 'delivery',
    loadChildren: () => import('@flfr-app/delivery/delivery.module').then(m => m.DeliveryModule)
  },
  {
    path: '**',
    loadChildren: () => import('@flfr-app/home-page/app-home.module').then(m => m.AppHomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
