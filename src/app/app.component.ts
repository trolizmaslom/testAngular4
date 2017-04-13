import { Component } from '@angular/core';
import {ShoppingListService} from "./shoping-list/shopping-list.servics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers:[ShoppingListService]
})
export class AppComponent {
    loadedFeature = 'recipe';
    onNavigate(feature){
        this.loadedFeature = feature;
    }
}
