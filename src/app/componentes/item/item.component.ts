import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fruta } from '../shopping-list/shopping-list.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Fruta = {name:"", quantity:0, price:0, id:0};
  @Output() deleteEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

deleteItem(){

  this.deleteEvent.emit();

}


}
