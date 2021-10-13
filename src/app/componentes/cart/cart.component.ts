import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fruta } from '../shopping-list/shopping-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() pasameFruta: Fruta[] = [];
  @Output() deleteEvent = new EventEmitter()
    constructor() { }

  ngOnInit(): void {
  }
deleteFromCart(fruta:Fruta){
 this.deleteEvent.emit(fruta.id)
}
}
