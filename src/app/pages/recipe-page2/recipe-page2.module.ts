import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipePage2PageRoutingModule } from './recipe-page2-routing.module';

import { RecipePage2Page } from './recipe-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipePage2PageRoutingModule
  ],
  declarations: [RecipePage2Page]
})
export class RecipePage2PageModule {}
