import {Injectable} from "@angular/core";
@Injectable()
export class custserviec{
    private name:string;
    private name1:string;
    private name2:string;
    private name3:string;
    constructor(){
        this.name="welcome to angaur custom service s rama laxmi anrayan patro";
    this.name1="s rama laxmi narayan patro";
    this.name2="s lalita patro";
    this.name3="s badrinarayan patro";
    }
    getdata(){
        return this.name;}
    getdata1(){
        return this.name1;}
    getdata2(){
        return this.name2;}
    getdata3(){
        return this.name3;}

}