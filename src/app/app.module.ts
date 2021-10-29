import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@flfr-app//app-routing.module';
import { AppComponent } from '@flfr-app/app.component';
import { HomeComponent } from '@flfr-app/component/home/home.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '@flfr-app/component/header/header.component';
import { MorePicturesComponent } from '@flfr-app/component/more-pictures/more-pictures.component';
import { CardHomeComponent } from '@flfr-app/component/card-home/card-home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MorePicturesComponent,
    CardHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      defaultLanguage: 'fr'
    })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
