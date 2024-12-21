import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRecipe1Page } from './add-recipe1.page';

describe('AddRecipe1Page', () => {
  let component: AddRecipe1Page;
  let fixture: ComponentFixture<AddRecipe1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipe1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
