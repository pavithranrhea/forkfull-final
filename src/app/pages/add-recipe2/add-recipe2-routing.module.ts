import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRecipe2Page } from './add-recipe2.page';

const routes: Routes = [
  {
    path: '',
    component: AddRecipe2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRecipe2PageRoutingModule {}
