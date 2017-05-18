import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.module";
import {ShoppingListService} from "../shoping-list/shopping-list.servics";
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
        new Recipe(
            'test',
            'tets desc',
            'http://www.mykidneyplan.com/wp-content/uploads/2016/11/SWFVSWFD.jpg',
            [
                new Ingredient('meat',50),
                new Ingredient('meat2',50),
                new Ingredient('meat3',50)
            ]
        ),
        new Recipe(
            'another',
            'tbla bla desc',
            'https://di-uploads-pod3.s3.amazonaws.com/kentuckyacuradealers/uploads/2015/10/2015-Acura-MDX-White-Image-2.png',
            [
                new Ingredient('meat4',50),
                new Ingredient('me5',50),
                new Ingredient('m6dst',50)
            ]
        )
    ];
    constructor(private sl:ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index:number){
        return this.recipes[index];
    }
    addIngrToSL(ing:Ingredient[]){
        this.sl.addInredients(ing);
    }
}