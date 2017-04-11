import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('test','tets desc', 'http://www.mykidneyplan.com/wp-content/uploads/2016/11/SWFVSWFD.jpg'),
    new Recipe('another','tbla bla desc', 'https://di-uploads-pod3.s3.amazonaws.com/kentuckyacuradealers/uploads/2015/10/2015-Acura-MDX-White-Image-2.png')
  ];
  onRecipeSelect(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
  constructor() { }

  ngOnInit() {
  }

}
