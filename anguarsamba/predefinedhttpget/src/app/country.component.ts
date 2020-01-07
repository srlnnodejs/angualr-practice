import {Component} from "@angular/core";
import {countryservice} from "./country.service";

@Component({
    selector:"countryapp",
    templateUrl:"./country.component.html"
})

export class CountryComponent{
    countrydata;
    constructor(private _countryservice:countryservice){

    }
    ngOnInit(){
            this._countryservice.getcountries().subscribe((response)=>{
            if(response){
                this.countrydata=response;}})}}