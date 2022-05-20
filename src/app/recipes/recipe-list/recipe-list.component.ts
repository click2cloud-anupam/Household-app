import { Component, OnInit , EventEmitter, Output} from '@angular/core';
// import { EventEmitter } from 'stream';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test desc','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjeD_t47D4pWirTgGwu4VwCfL5Ekba9cOlw&usqp=CAU'),
    new Recipe('Another Test Recipe', 'This is a test desc','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjeD_t47D4pWirTgGwu4VwCfL5Ekba9cOlw&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
