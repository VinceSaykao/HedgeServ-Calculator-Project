import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-buttons',
  templateUrl: './calc-buttons.component.html',
  styleUrls: ['./calc-buttons.component.scss']
})
export class CalcButtonsComponent implements OnInit {

  calcButton = 'buttons';

  constructor() { }

  ngOnInit(): void {
  }

}