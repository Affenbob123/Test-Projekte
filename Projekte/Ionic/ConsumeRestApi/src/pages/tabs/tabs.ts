import { Component } from '@angular/core';

import { AutoPage } from '../auto/auto';
import { HomePage } from '../home/home';
import { FahrradPage } from '../fahrrad/fahrrad';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AutoPage;
  tab3Root = FahrradPage;

  constructor() {

  }
}
