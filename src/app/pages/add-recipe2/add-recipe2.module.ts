import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRecipe2PageRoutingModule } from './add-recipe2-routing.module';

import { AddRecipe2Page } from './add-recipe2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRecipe2PageRoutingModule
  ],
  declarations: [AddRecipe2Page]
})
export class AddRecipe2PageModule {}
