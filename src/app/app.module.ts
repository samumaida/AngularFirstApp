import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialDesign } from './import-material/material.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './header/header.component';
import { SassoCartaForbiceComponent } from './sasso-carta-forbice/sasso-carta-forbice.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CurrencyConverterComponent,
    HeaderComponent,
    SassoCartaForbiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    AppMaterialDesign,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
