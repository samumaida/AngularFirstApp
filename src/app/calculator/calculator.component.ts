import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {

  displayNumber: any = '0';
  displayNumber2: any = '';
  firstNumber: any = '';
  secondNumber: any = '';
  operationType: any = '';

  calculator(dato: any, symbol: any) {
    if (this.displayNumber == 0 || this.displayNumber2) {
      this.displayNumber = '';
      this.displayNumber2 = '';
    }

    if (symbol === '+') {
      this.operationType = '+';
      this.firstNumber = this.displayNumber;
      this.displayNumber = '';
    }
    else if(symbol === '-') {
      this.operationType = '-';
      this.firstNumber = this.displayNumber;
      this.displayNumber = '';
    }
    else if(symbol === '/') {
      this.operationType = '/';
      this.firstNumber = this.displayNumber;
      this.displayNumber = '';
    }
    else if(symbol === 'x') {
      this.operationType = 'x';
      this.firstNumber = this.displayNumber;
      this.displayNumber = '';
    }
    else if(symbol === '%') {
      this.operationType = '%';
      this.firstNumber = this.displayNumber;
      this.displayNumber = '';
    }
    else if(symbol === 'ac') {
      this.operationType = '';
      this.firstNumber = '';
      this.secondNumber = '';
      this.displayNumber = '0';
      this.displayNumber2 = '';
    }
    else if(symbol === '+/-') {
      this.operationType = '';
      this.firstNumber = this.displayNumber;
      this.displayNumber = -this.displayNumber;
    }
    else if (symbol === '=') {
      this.secondNumber = this.displayNumber;
      const result = this.calculateResult();
      this.displayNumber = result;
      this.displayNumber2 = '';
      this.firstNumber = '';
      this.secondNumber = '';
      this.operationType = '';
    } else {
      this.displayNumber += dato;
    }
  }

  calculateResult() {
    const num1 = parseFloat(this.firstNumber);
    const num2 = parseFloat(this.secondNumber);
    let result = '';

    if (this.operationType === '+') {
      result = (num1 + num2).toString();
    }
    if(this.operationType === '-') {
      result = (num1 - num2).toString();
    }
    if(this.operationType === '/') {
      result = (num1 / num2).toString();
    }
    if(this.operationType === 'x') {
      result = (num1 * num2).toString();
    }
    if(this.operationType === '%') {
      result = (num1 % num2).toString();
    }
    return result;
  }
}
