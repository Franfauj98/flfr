// amCharts imports
import {Component} from '@angular/core';
import {DeliveryOption} from '@flfr-app/delivery/models/deliveryOption';
import {DeliveryService} from '@flfr-app/delivery/services/delivery.service';
import {BrowserUtils} from '@flfr-app/utils/BrowserUtils';
import {TranslateService} from '@ngx-translate/core';
import {CompleterData, CompleterService} from 'ng2-completer';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss']
})
export class DeliveryFormComponent {

  searchData: DeliveryOption[] = [];
  dataService: CompleterData;
  deliveryOptionSelected = '';
  userAgentMobile = false;

  constructor(private deliveryService: DeliveryService,
              private completerService: CompleterService,
              private translateService: TranslateService) {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
    this.searchData = [
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
      new DeliveryOption(this.translateService.instant('WEBSITE_DELIVERY_OPTION_6_NAME'),
        this.translateService.instant('WEBSITE_DELIVERY_OPTION_6_VALUE') as number),
      new DeliveryOption(this.translateService.instant('WEBSITE_DELIVERY_OPTION_7_NAME'),
        this.translateService.instant('WEBSITE_DELIVERY_OPTION_7_VALUE') as number),
    ];
    this.dataService = completerService.local(this.searchData, 'libelle', 'libelle');
  }

  submit(): void {
    const elementToAdd = this.searchData.find(elt => elt.libelle === this.deliveryOptionSelected);
    if (elementToAdd) {
      this.deliveryService.updateDeliveryOptionSelectedObservable(elementToAdd);
      this.deliveryService.addDeliveryOptionsObservable(elementToAdd);
    }
  }
}
