import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url:string = "https://rickandmortyapi.com/api/character"

  constructor( private http:HttpClient ) { }

  //obtener personajes
  getAll():Observable<Character[]>{
    return this.http.get<Character[]>(this.url + "/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20");
  }

  //obtener un personaje
  get(id:number):Observable<Character>{
    return this.http.get<Character>(this.url + "/" + id);
  }
}
