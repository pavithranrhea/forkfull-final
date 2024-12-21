import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipePage2Page } from './recipe-page2.page';

const routes: Routes = [
  {
    path: '',
    component: RecipePage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipePage2PageRoutingModule {}
