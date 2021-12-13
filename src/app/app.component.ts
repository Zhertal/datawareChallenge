import { Component } from '@angular/core';
import { RickandmorthyapiService } from './rickandmorthyapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datawareChallenge';
  
  requestedCharDetails = false;//For switch between details and characters list  
  actualPage = 0;

  characters:any;
  character = {
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: ""
    },
    location: {
      name: "",
      url: ""
    },
    image: "",
    episode: [],
    url: "",
    created: ""
  }

  mainUrl = "https://rickandmortyapi.com/api/";
  firstUrl = "https://rickandmortyapi.com/api/character/?page=1";
  lastUrl = "";//Change once characters is retrieved

  constructor(private rnmAPI:RickandmorthyapiService){}

  ngOnInit(){
    this.showCharPage(this.firstUrl);
  }

  showCharPage(url: string){
    console.log("Url; " + url);
    this.rnmAPI.getCharPage(url).subscribe(data => {
      this.characters = data;
      this.lastUrl = "https://rickandmortyapi.com/api/character/?page=" + this.characters.info.pages;
      if(this.characters.info.next == null)
        this.actualPage = parseInt(this.lastUrl.substring(this.lastUrl.indexOf('=')+1));
      else
        this.actualPage = parseInt(this.characters.info.next.substring(this.lastUrl.indexOf('=')+1)) - 1;
    });
  }

  getCharById(id: string){
    this.requestedCharDetails = true;
    this.rnmAPI.getCharDetails(id).subscribe(data => this.characters = data);
  }

  backDetails(value: boolean){
    this.requestedCharDetails = value;
    this.showCharPage(this.mainUrl + "character/?page="+ this.actualPage);
  }

  consoleLog(){
    //console.log(characters);
    //console.log("Last url: " + this.lastUrl);
    console.log("Actual page: " + this.actualPage);
  }

}