import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-buttons',
  templateUrl: './calc-buttons.component.html',
  styleUrls: ['./calc-buttons.component.scss']
})
export class CalcButtonsComponent implements OnInit {

  // properties with starting as an empty string
  input:string='';
  result:string='';

  // this method 
  onCalcInput(num:string) {


    // if number is 0, do nothing
    if (num == '0') {
      if (this.input == "") {
        return;
      }

    // if operator is pressed twice in a row, do nothing
    const operatorTwice = this.input[this.input.length - 1];

    if ( operatorTwice === '+' || operatorTwice === '-' || operatorTwice === '*' || operatorTwice === '/' ) {
      return;
    } 



    } // end of if loop


  } // end of onCalcInput

  

  ngOnInit(): void {
  }

}
