import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardHomeComponent} from "./card-home/card-home.component";
import {ContentComponent} from "./content/content.component";
import {HomeComponent} from './home/home.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    CardHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      defaultLanguage: 'fr'
    }),
    HttpClientModule,
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
