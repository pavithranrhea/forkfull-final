import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRecipe1Page } from './add-recipe1.page';

const routes: Routes = [
  {
    path: '',
    component: AddRecipe1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRecipe1PageRoutingModule {}
