import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipePage2Page } from './recipe-page2.page';

describe('RecipePage2Page', () => {
  let component: RecipePage2Page;
  let fixture: ComponentFixture<RecipePage2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipePage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
