import {Component, OnInit, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.module";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  onAddItem(){
    const newIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);

  }
  constructor() { }

  ngOnInit() {
  }

}
