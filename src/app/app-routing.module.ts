import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MobileGuard} from "@flfr-app/services/mobile.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@flfr-app/home-page/app-home.module').then(m => m.AppHomeModule),
    canActivate: [MobileGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('@flfr-app/home-page/app-home.module').then(m => m.AppHomeModule),
    canActivate: [MobileGuard]

  },
  {
    path: 'contacts',
    loadChildren: () => import('@flfr-app/contacts/contacts.module').then(m => m.ContactsModule),
    canActivate: [MobileGuard]

  },
  {
    path: 'whoWeAre',
    loadChildren: () => import('@flfr-app/whoWeAre/who-we-are.module').then(m => m.WhoWeAreModule),
    canActivate: [MobileGuard]

  },
  {
    path: 'delivery',
    loadChildren: () => import('@flfr-app/delivery/delivery.module').then(m => m.DeliveryModule),
    canActivate: [MobileGuard]
  },
  {
    path: 'mobile',
    loadChildren: () => import('@flfr-app/mobile-new-nav/mobile.module').then(m => m.MobileModule)
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
