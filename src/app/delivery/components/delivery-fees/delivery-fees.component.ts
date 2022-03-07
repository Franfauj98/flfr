import {Component, OnInit} from '@angular/core';
import {DeliveryOption} from '@flfr-app/delivery/models/deliveryOption';
import {DeliveryService} from '@flfr-app/delivery/services/delivery.service';
import {BrowserUtils} from '@flfr-app/utils/BrowserUtils';

@Component({
  selector: 'app-delivery-fees',
  templateUrl: './delivery-fees.component.html',
  styleUrls: ['./delivery-fees.component.scss']
})
export class DeliveryFeesComponent implements OnInit {

  optionSelected: DeliveryOption = new DeliveryOption('', 0);
  userAgentMobile = false;

  constructor(private deliveryService: DeliveryService) {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }

  ngOnInit(): void {
    this.deliveryService.getDeliveryOptionSelectedObservable().subscribe(optionSelected => this.optionSelected = optionSelected);
  }

}
