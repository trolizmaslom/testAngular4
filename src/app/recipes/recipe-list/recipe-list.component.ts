import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('test','tets desc', 'http://www.mykidneyplan.com/wp-content/uploads/2016/11/SWFVSWFD.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
