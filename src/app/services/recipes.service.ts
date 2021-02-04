import { Injectable } from '@angular/core'
import { Recipe } from '../recipes/recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service'

@Injectable({
  providedIn: 'root',
})
export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://i.pinimg.com/736x/20/51/ee/2051ee9e323377af318f1ae15997b610.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fires', 20)]
    ),
    new Recipe(
      2,
      'Big Fat Burger',
      'What else you need to say?',
      'https://sun1-92.userapi.com/8mVV2C0hBu_NexmJENki4sfMVWZkAM-HDavdDw/XJzzs5nB1jI.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ]

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes
  }

  getRecipe(id: number): Recipe {
    return this.recipes.find(recipe => recipe.id === id)
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
