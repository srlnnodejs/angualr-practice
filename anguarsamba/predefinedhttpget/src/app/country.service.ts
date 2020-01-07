import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import "rxjs/Rx";
import "rxjs-compat";
@Injectable()
export class countryservice{
constructor(private _http:Http){}
getcountries(){
return this._http.get("http://restcountries.eu/rest/v2/all")
.map((res:Response)=>
{return res.json();})}}