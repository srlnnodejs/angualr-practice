import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {Compone} from "./compone"
import {custserviec} from "./custser1"
//import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    Compone
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [custserviec],
  bootstrap: [Compone]
})
export class AppModule { }
