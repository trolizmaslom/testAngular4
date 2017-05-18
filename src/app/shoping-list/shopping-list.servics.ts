import {Ingredient} from "../shared/ingredient.module";

import {Subject} from "rxjs/Subject";
export class ShoppingListService{
    ingChanged = new Subject<Ingredient[]>();
    private ingredients:Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Plum', 10),
        new Ingredient('Tomato', 15)
    ];
    getIngredients(){
        return this.ingredients.slice();
    }
    addInredient(ing:Ingredient){
        this.ingredients.push(ing);
        this.ingChanged.next(this.ingredients.slice());
    }
    addInredients(ing:Ingredient[]){
        this.ingredients.push(...ing);
        this.ingChanged.next(this.ingredients.slice());
    }
}