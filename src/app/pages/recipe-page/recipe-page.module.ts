import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipePagePageRoutingModule } from './recipe-page-routing.module';

import { RecipePagePage } from './recipe-page.page';
import { Component } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipePagePageRoutingModule
  ],
  declarations: [RecipePagePage]
})
export class RecipePagePageModule {}



