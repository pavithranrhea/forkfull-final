import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipePagePage } from './recipe-page.page';

describe('RecipePagePage', () => {
  let component: RecipePagePage;
  let fixture: ComponentFixture<RecipePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
