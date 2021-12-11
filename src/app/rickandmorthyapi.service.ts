import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickandmorthyapiService {

  url = "https://rickandmortyapi.com/api/";

  constructor(private http:HttpClient) { }

  getCharPage(page:string){
    return this.http.get(this.url+"character/?page="+page);
  }

  getCharDetails(id:string){
    return this.http.get(this.url+"character/"+id);
  }
}
