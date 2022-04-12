import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {WebsiteModule} from "@candypal/website";
import {HttpClientModule} from "@angular/common/http";
import {AniruddhModule} from "./aniruddh/aniruddh.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WebsiteModule,
    AniruddhModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
