import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-recipe1',
    pathMatch: 'full'
  },
  {
    path: 'add-recipe1',
    loadChildren: () => import('./pages/add-recipe1/add-recipe1.module').then( m => m.AddRecipe1PageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./pages/explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'recipe-page',
    loadChildren: () => import('./pages/recipe-page/recipe-page.module').then( m => m.RecipePagePageModule)
  },
  {
    path: 'add-recipe2',
    loadChildren: () => import('./pages/add-recipe2/add-recipe2.module').then( m => m.AddRecipe2PageModule)
  },
  {
    path: 'recipe-page2',
    loadChildren: () => import('./pages/recipe-page2/recipe-page2.module').then( m => m.RecipePage2PageModule)
  },
  {
    path: 'recipe-page3',
    loadChildren: () => import('./pages/recipe-page3/recipe-page3.module').then( m => m.RecipePage3PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
