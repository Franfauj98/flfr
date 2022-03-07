import {Component} from '@angular/core';
import {BrowserUtils} from '@flfr-app/utils/BrowserUtils';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  userAgentMobile = false;

  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }

  getMapMagasin(): string {
    if (this.userAgentMobile) {
      return 'assets/images/mapMagasinMobile.png';
    }
    return 'assets/images/mapMagasin.png';
  }
}
