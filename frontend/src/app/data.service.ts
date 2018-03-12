import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Http , Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class DataService {

 // private _getUrl = "/api/videos";
 
  constructor(private _http : Http) { }

  getData(){
    return this._http.get('http://localhost:3000/user')
      .map(res => res.json());
  }
  
}