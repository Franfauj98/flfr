import {Component} from '@angular/core';
import {DeliveryOption} from '@flfr-app/delivery/models/deliveryOption';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-delivery-container',
  templateUrl: './delivery-container.component.html',
  styleUrls: ['./delivery-container.component.scss']
})
export class DeliveryContainerComponent {

  deliveryOptions: DeliveryOption[] = [];

  constructor(private translateService: TranslateService) {
    this.deliveryOptions = [
      new DeliveryOption(this.translateService.instant('WEBSITE_DELIVERY_OPTION_1_NAME'),
        this.translateService.instant('WEBSITE_DELIVERY_OPTION_1_VALUE') as number),
      new DeliveryOption(this.translateService.instant('WEBSITE_DELIVERY_OPTION_2_NAME'),
        this.translateService.instant('WEBSITE_DELIVERY_OPTION_2_VALUE') as number),
      new DeliveryOption(this.translateService.instant('WEBSITE_DELIVERY_OPTION_3_NAME'),
        this.translateService.instant('WEBSITE_DELIVERY_OPTION_3_VALUE') as number),
      new DeliveryOption(this.translateService.instant('WEBSITE_DELIVERY_OPTION_4_NAME'),
        this.translateService.instant('WEBSITE_DELIVERY_OPTION_4_VALUE') as number),
      new DeliveryOption(this.translateService.instant('WEBSITE_DELIVERY_OPTION_5_NAME'),
        this.translateService.instant('WEBSITE_DELIVERY_OPTION_5_VALUE') as number),
    ];
  }

}
