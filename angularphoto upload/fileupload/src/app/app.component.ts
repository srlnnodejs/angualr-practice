import { Component } from '@angular/core';
import {HttpClient} from "@angular/common"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile=null;
 onFileSelected(event){
   console.log(event)
 }
 onUpload(){

 }

 
 
 
  title = 'fileupload';
}
