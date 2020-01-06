import {Component} from "@angular/core";
@Component({
selector:"childone",
templateUrl:"./childone.component.html"
})
export class ChildoneComponent{
private title1:string;
constructor(){
    this.title1="sir iam from child one ok"
}

}