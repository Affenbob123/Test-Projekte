export class Auto {
  id: number;
  bezeichnung: string;
  farbe: string;

  constructor(bezeichnung: string, farbe: string) {
    this.bezeichnung = bezeichnung;
    this.farbe = farbe;
  }
}
