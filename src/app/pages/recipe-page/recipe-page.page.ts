import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.page.html',
  styleUrls: ['./recipe-page.page.scss'],
})
export class RecipePagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class ExampleComponent {
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];
}