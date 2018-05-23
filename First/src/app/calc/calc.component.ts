import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  result = 0;

  add(num1, num2) {
    this.result =  parseInt(num1) + parseInt(num2)
  }

}
