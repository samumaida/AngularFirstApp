//creazione file di export componenti angular material
//importo il file api nel modulo ts
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';

//inserisco il componente all'interno dell'array modules
const modules = [
  MatCardModule,
  MatIconModule,
  MatButtonToggleModule,
  MatSelectModule,
]
// ngModule esporta l'array
@NgModule (
  {
exports: [
  modules,

]
}
)

export class AppMaterialDesign{

}
