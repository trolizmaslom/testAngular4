import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.module";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Plum', 10),
    new Ingredient('Tomato', 15)
  ];
  onIngredientAdded(ing:Ingredient){
    
    this.ingredients.push(ing);
  }
  constructor() { }

  ngOnInit() {
  }

}
