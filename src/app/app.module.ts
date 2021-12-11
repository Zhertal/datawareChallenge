import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { RickandmorthyapiService } from './rickandmorthyapi.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    RickandmorthyapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
