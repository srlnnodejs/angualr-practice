import { Component } from '@angular/core';
import{AuthService,SocialUser,GoogleLoginProvider} from "ng4-social-login"
import "rxjs-compat";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googleauth';
  public user:any=SocialUser;
  constructor(private socialAuthService:AuthService){

  }
  googleLogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>{
      this.user=userData;
    })
  }

}
