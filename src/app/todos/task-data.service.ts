import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  url: string ='http://localhost:3000/task';
  constructor(private _http:HttpClient) { }

  getAllTask(){
    return this._http.get(this.url);
  }
}
