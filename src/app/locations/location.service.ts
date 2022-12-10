import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Location} from "./location";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private url:string = "https://rickandmortyapi.com/api/location"

  constructor(private http:HttpClient) { }

  //obtener localizaciones
  getAll():Observable<Location[]>{
    return this.http.get<Location[]>(this.url + "/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20");
  }

  //obtener una localizacion

  get(id:number):Observable<Location>{
    return this.http.get<Location>(this.url + "/" + id);
  }
}
