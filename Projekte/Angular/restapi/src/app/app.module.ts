import { BrowserModule } from '@angular/platform-browser/';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './app.constants';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import { DataService } from './service/data.service';
import { FahrradComponent } from './fahrrad/fahrrad.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    FahrradComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService, Configuration, SlimLoadingBarService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
