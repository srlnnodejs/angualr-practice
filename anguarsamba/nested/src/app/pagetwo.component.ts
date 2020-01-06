import {Component} from "@angular/core";
@Component({
selector:"pagetwo",
templateUrl:"./pagetwo.component.html"
})
export class PagetwoComponent{
private title:string;
constructor(){
    this.title="sir iam from page two compoenent"
}
}