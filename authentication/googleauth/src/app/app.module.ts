import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{SocialLoginModule,AuthServiceConfig,GoogleLoginProvider} from 'ng4-social-login';
const config=new AuthServiceConfig([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider:new GoogleLoginProvider('482283913957-23cfve2svurphlkfsroaesh4ra94ns3n.apps.googleusercontent.com')
  }
],false);
export function provideConfig(){
  return config;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SocialLoginModule
  ],
  providers: [{provide:AuthServiceConfig,useFactory:provideConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
