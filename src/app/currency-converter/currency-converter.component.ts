import { Component, ViewChild } from '@angular/core';

interface Valute {
  value: string;
  viewValue: string;
  }

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
  @ViewChild("option")option!: any

  valute: Valute[] = [
    { value: 'swiss-franc', viewValue: '🇨🇭 CHF (swiss-franc)' },
    { value: 'dollar', viewValue: '🇺🇸 $ DOLLAR' },
    { value: 'sterlin-3', viewValue: '🇬🇧 £ STERLIN' },
  ];

  decimal: any = [];

currencyValue = ''
simbol = ''
onKeyUp(x:any) {
  const r = document.getElementsByClassName('mat-mdc-select-min-line')
  console.log(r)
  if(r[0].innerHTML === '🇨🇭 CHF (swiss-franc)'){
    this.currencyValue = ''
    this.simbol = ' CHF'
   let n = this.currencyValue += (x.target.value * 0.96).toFixed(2);
   this.decimal.push(n)
   const f = this.decimal
   console.log(f)
  }
  else if(r[0].innerHTML == '🇺🇸 $ DOLLAR'){
    this.currencyValue = ''
    this.simbol = ' $'
    this.currencyValue += (x.target.value * 1.12).toFixed(2);
  }
  else if(r[0].innerHTML == '🇬🇧 £ STERLIN'){
    this.currencyValue = ''
    this.simbol = ' £'
    this.currencyValue += (x.target.value * 0.85).toFixed(2);
  }
  else if(r[0].innerHTML == 'EUR - €'){
    this.currencyValue = ''
    this.simbol = ' €'
    this.currencyValue += (x.target.value * 1).toFixed(2);
  }
  else {
    this.currencyValue = ''
  }
}
}
