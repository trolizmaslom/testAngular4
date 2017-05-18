import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from "../shared/ingredient.module";
import {ShoppingListService} from "./shopping-list.servics";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[];
  private subscription:Subscription;
  constructor(private sListServ: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.sListServ.getIngredients();
    this.subscription = this.sListServ.ingChanged.subscribe(
        (ingredients:Ingredient[]) =>{
          this.ingredients = ingredients;
        }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
