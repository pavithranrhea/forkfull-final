import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRecipe2Page } from './add-recipe2.page';

describe('AddRecipe2Page', () => {
  let component: AddRecipe2Page;
  let fixture: ComponentFixture<AddRecipe2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipe2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
