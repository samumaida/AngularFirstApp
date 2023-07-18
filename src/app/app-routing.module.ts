import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { HeaderComponent } from './header/header.component';
import { SassoCartaForbiceComponent } from './sasso-carta-forbice/sasso-carta-forbice.component';


const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'iphone-calculator', component: CalculatorComponent},
  {path: 'currency-converter', component: CurrencyConverterComponent},
  {path: 'sasso-carta-forbice', component: SassoCartaForbiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
