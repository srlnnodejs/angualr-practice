import {Component} from "@angular/core";
@Component({
selector:"pageone",
templateUrl:"./pageone.component.html"})
export class PageoneComponent{
private title:string;

constructor(){
    this.title="sir iam from page one ocmponent"
}
}