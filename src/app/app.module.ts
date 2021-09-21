import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardHomeComponent} from "./component/card-home/card-home.component";
import {HomeComponent} from "./component/home/home.component";
import {HeaderComponent} from './component/header/header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MorePicturesComponent} from "./component/more-pictures/more-pictures.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardHomeComponent,
    MorePicturesComponent
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
    BrowserAnimationsModule,
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
