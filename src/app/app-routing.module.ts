import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShopingListComponent} from "./shoping-list/shoping-list.component";
import {RecipeStratComponent} from "./recipes/recipe-strat/recipe-strat.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
const appRoutes:Routes = [
    {path:'', redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes', component: RecipesComponent, children:[
        {path:'', component: RecipeStratComponent},
        {path:'new', component: RecipeEditComponent},
        {path:':id', component: RecipeDetailComponent},
        {path:':id/edit', component: RecipeEditComponent}
    ]},
    {path:'shopping-list', component:ShopingListComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}