import {IndexComponent} from "./index.component"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PageoneComponent} from "./pageone.component";
import {PagetwoComponent} from "./pagetwo.component";
import {ChildoneComponent} from "./childone.component";
import {ChildtwoComponent} from "./childtwo.component";
import {AppRoutes} from "./app.routes";
import {RouterModule} from "@angular/router"
//import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';

@NgModule({
  declarations: [IndexComponent,PageoneComponent,PagetwoComponent,
    ChildoneComponent,ChildtwoComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
