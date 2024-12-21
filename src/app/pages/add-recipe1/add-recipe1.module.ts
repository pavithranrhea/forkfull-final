import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRecipe1PageRoutingModule } from './add-recipe1-routing.module';

import { AddRecipe1Page } from './add-recipe1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRecipe1PageRoutingModule
  ],
  declarations: [AddRecipe1Page]
})
export class AddRecipe1PageModule {}
