import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  values = '';

  box = 2;

  constructor() { }

  ngOnInit() {
  }

  onKey(value: string) {
   this.values = value;
   console.log(this.box);
  }

}
