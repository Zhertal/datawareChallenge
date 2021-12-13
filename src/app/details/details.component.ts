import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() character: any;

  @Output() reqCharDetails = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  volver(value: boolean){
    this.reqCharDetails.emit(value);
  }
}
