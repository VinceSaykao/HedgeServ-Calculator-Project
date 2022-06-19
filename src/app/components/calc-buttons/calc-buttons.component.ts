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


    } // end of if loop


  } // end of onCalcInput

  

  ngOnInit(): void {
  }

}
