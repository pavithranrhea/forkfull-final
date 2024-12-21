import { Component, OnInit } from '@angular/core';
import { AddRecipeService } from 'src/app/services/add-recipe.service';


@Component({
  selector: 'app-add-recipe1',
  templateUrl: './add-recipe1.page.html',
  styleUrls: ['./add-recipe1.page.scss'],
})
export class AddRecipe1Page implements OnInit {

  constructor(private addrecipeService: AddRecipeService) { }

  ngOnInit() {
  }

}
