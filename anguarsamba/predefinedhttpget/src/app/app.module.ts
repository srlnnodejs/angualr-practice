import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {CountryComponent} from "./country.component";
import {countryservice} from "./country.service";
import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';

@NgModule({
  declarations: [CountryComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpModule
  ],
  providers: [countryservice],
  bootstrap: [CountryComponent]
})
export class AppModule { }
