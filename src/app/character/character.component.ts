import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character:any;
  
  @Output() charId = new EventEmitter<string>()
  
  constructor() { }

  ngOnInit(): void {
  }

  viewDetails(value:string){
    this.charId.emit(value);
  }
  
}
