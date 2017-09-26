import { Component, OnInit } from '@angular/core';

import { Hero } from '../../core/hero';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  powers: Array<string> = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model: Hero = new Hero(0, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted: Boolean = false;

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
  }

  // remove this after development
  get disnosetic(): string {
    return JSON.stringify(this.model);
  }

}
