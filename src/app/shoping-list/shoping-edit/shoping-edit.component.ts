import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.module";
import {ShoppingListService} from "../shopping-list.servics";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;

  onAddItem(){
    const newIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.sListServ.addInredient(newIngredient);
  }
  constructor(private sListServ: ShoppingListService) { }

  ngOnInit() {
  }

}
