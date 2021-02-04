import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { ShoppingListService } from '../services/shopping-list.service'
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]
  private igChangeSub: Subscription

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe()
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients) => {
        this.ingredients = ingredients
      }
    )
  }
}
