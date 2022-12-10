import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Episode } from './episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private url:string = "https://rickandmortyapi.com/api/episode"

  constructor(private http:HttpClient) { }

  //obtener episodios
  getAll():Observable<Episode[]>{
    return this.http.get<Episode[]>(this.url + "/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20");
  }

  //obtener un episodio
  get(id:number):Observable<Episode>{
    return this.http.get<Episode>(this.url + "/" + id);
  }
}
