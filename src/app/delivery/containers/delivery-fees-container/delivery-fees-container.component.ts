import {Component} from '@angular/core';
import {BrowserUtils} from '@flfr-app/utils/BrowserUtils';

@Component({
  selector: 'app-delivery-fees-container',
  templateUrl: './delivery-fees-container.component.html',
  styleUrls: ['./delivery-fees-container.component.scss']
})
export class DeliveryFeesContainerComponent {
  userAgentMobile = false;

  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }

}
