import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickandmorthyapiService {

  url = "https://rickandmortyapi.com/api/";

  constructor(private http:HttpClient) { }

  getCharPage(url:string){
    return this.http.get(url);
  }

  getCharDetails(id:string){
    return this.http.get(this.url+"character/"+id);
  }
}
