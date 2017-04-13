import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.module";
import {ShoppingListService} from "./shopping-list.servics";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients:Ingredient[];

  constructor(private sListServ: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.sListServ.getIngredients();
    this.sListServ.ingChanged.subscribe(
        (ingredients:Ingredient[]) =>{
          this.ingredients = ingredients;
        }
    );
  }

}
