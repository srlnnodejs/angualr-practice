import {Component} from "@angular/core";
import {custserviec} from "./custser1"
@Component({
    selector:"componedata",
    templateUrl:"./compone.html"
})
export class Compone{
welcome="welcome to nareshit"
serdata;
serdata1;
serdata2;
serdata3;
constructor(private custser1:custserviec){
}
ngOnInit(){
this.serdata=this.custser1.getdata();
}
funone(){
this.serdata1=this.custser1.getdata1();
this.serdata2=this.custser1.getdata2();
this.serdata3=this.custser1.getdata3();
return this.serdata1+"-------"+this.serdata2+"-----"+this.serdata3;
}


}