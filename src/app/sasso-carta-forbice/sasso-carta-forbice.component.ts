import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sasso-carta-forbice',
  templateUrl: './sasso-carta-forbice.component.html',
  styleUrls: ['./sasso-carta-forbice.component.css']
})
export class SassoCartaForbiceComponent {

  nomeGiocatore: string = "";
  punteggioGiocatore: number = 0;
  punteggioComputer: number = 0;

  @ViewChild('text', { static: true }) textElementRef!: ElementRef;
  @ViewChild('victory', { static: true }) victoryElementRef!: ElementRef;
  @ViewChild('text2', { static: true }) text2ElementRef!: ElementRef;
  @ViewChild('puntiGiocatore', { static: true }) puntiGiocatoreElementRef!: ElementRef;
  @ViewChild('puntiComputer', { static: true }) puntiComputerElementRef!: ElementRef;

  onGiocatoreSubmit() {
    if (this.nomeGiocatore === "" || this.nomeGiocatore === null) {
      this.textElementRef.nativeElement.innerHTML = "Non hai inserito nessun nome!";
    } else {
      this.textElementRef.nativeElement.innerHTML = `Ciao ${this.nomeGiocatore}, fai la tua scelta!`;
      this.puntiGiocatoreElementRef.nativeElement.innerHTML = `${this.punteggioGiocatore}`;
      this.puntiComputerElementRef.nativeElement.innerHTML = `${this.punteggioComputer}`;
    }
  }

  onCartaClick() {
    this.textElementRef.nativeElement.innerHTML = "Hai scelto carta!";
    let carta = Math.floor(Math.random() * 3);
    let numberBot = Math.floor(Math.random() * 9);
    this.text2ElementRef.nativeElement.innerHTML = "Caricamento...";

    const svuota = () => {
      this.victoryElementRef.nativeElement.innerHTML = "";
    };

    const bim = () => {
      this.victoryElementRef.nativeElement.innerHTML = "BIM";
    };

    const bum = () => {
      this.victoryElementRef.nativeElement.innerHTML = "BUM";
    };

    const bam = () => {
      this.victoryElementRef.nativeElement.innerHTML = "BAM";
    };

    const res = () => {
      if (numberBot <= 2) {
        this.text2ElementRef.nativeElement.innerHTML = "Computer ha scelto carta!";
        this.victoryElementRef.nativeElement.innerHTML = "PAREGGIO!";
      } else if (numberBot >= 6) {
        this.text2ElementRef.nativeElement.innerHTML = "Computer ha scelto sasso!";
        this.victoryElementRef.nativeElement.innerHTML = "COMPLIMENTI, HAI VINTO!";
        this.punteggioGiocatore++;
        this.puntiGiocatoreElementRef.nativeElement.innerHTML = `${this.punteggioGiocatore}`;
      } else {
        this.text2ElementRef.nativeElement.innerHTML = "Computer ha scelto forbice!";
        this.victoryElementRef.nativeElement.innerHTML = "MI SPIACE, HA VINTO IL COMPUTER!";
        this.punteggioComputer++;
        this.puntiComputerElementRef.nativeElement.innerHTML = `${this.punteggioComputer}`;
      }
    };

    const nullo = setTimeout(svuota, 10);
    const bi = setTimeout(bim, 500);
    const bu = setTimeout(bum, 1000);
    const ba = setTimeout(bam, 1500);
    const result = setTimeout(res, 2000);
  }

  onForbiceClick() {
    this.textElementRef.nativeElement.innerHTML = "Hai scelto forbice!";
    let number = Math.floor(Math.random() * 3) + 3;
    let numberBot = Math.floor(Math.random() * 9);
    this.text2ElementRef.nativeElement.innerHTML = "Caricamento...";

    const svuota = () => {
      this.victoryElementRef.nativeElement.innerHTML = "";
    };

    const bim = () => {
      this.victoryElementRef.nativeElement.innerHTML = "BIM";
    };

    const bum = () => {
      this.victoryElementRef.nativeElement.innerHTML = "BUM";
    };

    const bam = () => {
      this.victoryElementRef.nativeElement.innerHTML = "BAM";
    };

    const res = () => {
      if (numberBot <= 2) {
        this.text2ElementRef.nativeElement.innerHTML = "Computer ha scelto carta!";
        this.victoryElementRef.nativeElement.innerHTML = "COMPLIMENTI, HAI VINTO!";
        this.punteggioGiocatore++;
        this.puntiGiocatoreElementRef.nativeElement.innerHTML = `${this.punteggioGiocatore}`;
      } else if (numberBot >= 6) {
        this.text2ElementRef.nativeElement.innerHTML = "Computer ha scelto sasso!";
        this.victoryElementRef.nativeElement.innerHTML = "MI SPIACE, HA VINTO IL COMPUTER!";
        this.punteggioComputer++;
        this.puntiComputerElementRef.nativeElement.innerHTML = `${this.punteggioComputer}`;
      } else {
        this.text2ElementRef.nativeElement.innerHTML = "Computer ha scelto forbice!";
        this.victoryElementRef.nativeElement.innerHTML = "PAREGGIO!";
      }
    };

    const nullo = setTimeout(svuota, 10);
    const bi = setTimeout(bim, 500);
    const bu = setTimeout(bum, 1000);
    const ba = setTimeout(bam, 1500);
    const result = setTimeout(res, 2000);
  }

  onSassoClick() {
    this.textElementRef.nativeElement.innerHTML = "Hai scelto sasso!";
    let number = Math.floor(Math.random() * 3) + 6;
    let numberBot = Math.floor(Math.random() * 9);
    this.text2ElementRef.nativeElement.innerHTML = "Caricamento...";

    const svuota = () => {
      this.victoryElementRef.nativeElement.innerHTML = "";
    };

    const bim = () => {
      this.victoryElementRef.nativeElement.innerHTML = "BIM";
    };

    const bum = () => {
      this.victoryElementRef.nativeElement.innerHTML = "BUM";
    };

    const bam = () => {
      this.victoryElementRef.nativeElement.innerHTML = "BAM";
    };

    const res = () => {
      if (numberBot <= 2) {
        this.text2ElementRef.nativeElement.innerHTML = "Computer ha scelto carta!";
        this.victoryElementRef.nativeElement.innerHTML = "MI SPIACE, HA VINTO IL COMPUTER!";
        this.punteggioComputer++;
        this.puntiComputerElementRef.nativeElement.innerHTML = `${this.punteggioComputer}`;
      } else if (numberBot >= 6) {
        this.text2ElementRef.nativeElement.innerHTML = "Computer ha scelto sasso!";
        this.victoryElementRef.nativeElement.innerHTML = "PAREGGIO!";
      } else {
        this.text2ElementRef.nativeElement.innerHTML = "Computer ha scelto forbice!";
        this.victoryElementRef.nativeElement.innerHTML = "COMPLIMENTI, HAI VINTO!";
        this.punteggioGiocatore++;
        this.puntiGiocatoreElementRef.nativeElement.innerHTML = `${this.punteggioGiocatore}`;
      }
    };

    const nullo = setTimeout(svuota, 10);
    const bi = setTimeout(bim, 500);
    const bu = setTimeout(bum, 1000);
    const ba = setTimeout(bam, 1500);
    const result = setTimeout(res, 2000);
  }

}
