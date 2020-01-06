import {Component} from "@angular/core";
@Component({
selector:"nested-spa",
templateUrl:"./index.component.html"

})
export class IndexComponent{
    private title:string
    constructor(){
        this.title="welcome to single page application and nested routing"
    }
}