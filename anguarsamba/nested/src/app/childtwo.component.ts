import {Component} from "@angular/core";
@Component({
selector:"childtwo",
templateUrl:"./childtwo.component.html"

})
export class ChildtwoComponent{
private title2:string;
constructor(){
    this.title2="sir iam from child two component"
}


}