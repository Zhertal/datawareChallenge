import { Component } from '@angular/core';
import { RickandmorthyapiService } from './rickandmorthyapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datawareChallenge';
  
  requestedCharDetails = false;
  
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

  constructor(private rnmAPI:RickandmorthyapiService){}

  ngOnInit(){
    this.showCharPage('1');
  }
  showCharPage(page:string){
    this.rnmAPI.getCharPage(page).subscribe(data => this.characters = data);
  }
  getCharById(id: string){
    this.requestedCharDetails = true;
    this.rnmAPI.getCharDetails(id).subscribe(data => this.characters = data);
  }
  consoleLog(){
    console.log(this.characters);
  }

}