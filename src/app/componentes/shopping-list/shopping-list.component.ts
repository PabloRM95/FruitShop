import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

export type Fruta = {
  name: string;
  quantity: number;
  price: number;
  id: number;
};
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  fruitList: Fruta[] = [];

  newFruit: Fruta = { name: '', quantity: 0, price: 0, id: 0 };
  contador = 0;
  constructor(private AlertServices: AlertService ) {}

 


  

  ngOnInit(): void {}
  addFruit() {
    let fruit: Fruta = {
      name: this.newFruit.name,
      quantity: this.newFruit.quantity,
      price: this.newFruit.price,
      id: this.contador,
    };
    this.contador++;
    this.fruitList.push(fruit);
    this.AlertServices.ShowSuccess();
  }

  deleteFruit(id: number) {
    this.fruitList = this.fruitList.filter((element) => element.id != id);
  }
}
