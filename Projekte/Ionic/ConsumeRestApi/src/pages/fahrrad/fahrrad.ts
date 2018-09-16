import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataProvider } from '../../providers/data-service/data-service';


@Component({
  selector: 'page-fahrrad',
  templateUrl: 'fahrrad.html'
})
export class FahrradPage implements OnInit{
  public apiUrl = 'fahrraeder/';
  public fahrraeder: Array<Fahrrad>;

  constructor(
    public navCtrl: NavController,
    private _dataService: DataProvider) {
  }

  ngOnInit() {
    this.getAlleFahrraeder();
  }

  getAlleFahrraeder() {
    this._dataService
        .getAll<Fahrrad[]>(this.apiUrl)
        .subscribe((data: Fahrrad[]) => this.fahrraeder = data);
  }

  // getEinFahrrad(id: number) {
  //   this.fahrrad = this._dataService.getSingle<Fahrrad>(id, this.apiUrl);
  // }
  //
  // erstelleNeuesFahrrad() {
  //   this._dataService.add<Fahrrad>(this.neuesFahrrad, this.apiUrl);
  // }
  //
  // aktualisiereFahrrad(id: number) {
  //   this._dataService.update<Fahrrad>(id, this.fahrrad, this.apiUrl);
  // }

  loescheFahrrad(id: number) {
    this._dataService.delete<Fahrrad>(id, this.apiUrl);
  }
}

export class Fahrrad {
  id: number;
  bezeichnung: string;

  constructor(bezeichnung: string) {
    this.bezeichnung = bezeichnung;
  }
}
