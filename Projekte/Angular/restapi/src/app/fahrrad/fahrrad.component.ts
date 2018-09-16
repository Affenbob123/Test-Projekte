import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { DataService } from '../service/data.service';
import { Fahrrad } from './fahrrad';

@Component({
  selector: 'app-fahrrad',
  templateUrl: './fahrrad.component.html',
  styleUrls: ['./fahrrad.component.css']
})
export class FahrradComponent implements OnInit {
  public apiUrl = 'fahrraeder/';
  public fahrraeder: Array<Fahrrad>;
  public fahrrad;
  public neuesFahrrad: Fahrrad;

  constructor(
    private _dataService: DataService,
    private _slimLoadingBarService: SlimLoadingBarService) {
    this.neuesFahrrad = new Fahrrad('Fahrrad 5');
  }

  ngOnInit() {
    this._slimLoadingBarService.start();
    this.getAlleFahrraeder();
  }

  getAlleFahrraeder() {
    this._dataService
        .getAll<Fahrrad[]>(this.apiUrl)
        .subscribe((data: Fahrrad[]) => this.fahrraeder = data);
  }

  getEinFahrrad(id: number) {
    this.fahrrad = this._dataService.getSingle<Fahrrad>(id, this.apiUrl);
  }

  erstelleNeuesFahrrad() {
    this._dataService.add<Fahrrad>(this.neuesFahrrad, this.apiUrl);
  }

  aktualisiereFahrrad(id: number) {
    this._dataService.update<Fahrrad>(id, this.fahrrad, this.apiUrl);
  }

  loescheFahrrad(id: number) {
    this._dataService.delete<Fahrrad>(id, this.apiUrl);
  }
}
