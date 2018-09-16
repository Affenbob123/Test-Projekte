import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { DataService } from '../service/data.service';
import { Auto } from './auto';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  public apiUrl = 'autos/';
  public autos: Array<Auto>;
  public auto;
  public neuesAuto: Auto;

  constructor(
    private _dataService: DataService,
    private _slimLoadingBarService: SlimLoadingBarService) {
    this.neuesAuto = new Auto('Auto 5','grün')
  }

  ngOnInit() {
    this._slimLoadingBarService.start();
    this.getAlleAutos();
  }

  getAlleAutos() {
    this._dataService
        .getAll<Auto[]>(this.apiUrl)
        .subscribe((data: Auto[]) => this.autos = data);
  }

  getEinAuto(id: number) {
    this.auto = this._dataService.getSingle<Auto>(id, this.apiUrl);
  }

  erstelleNeuesAuto() {
    this._dataService.add<Auto>(this.neuesAuto, this.apiUrl);
  }

  loescheAuto(id: number) {
    this._dataService
      .delete<Auto>(id, this.apiUrl);
  }
}
