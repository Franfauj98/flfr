import {Injectable} from '@angular/core';
import {DeliveryOption} from '@flfr-app/delivery/models/deliveryOption';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DeliveryService {

  public deliveryOptions: BehaviorSubject<DeliveryOption[]>;

  constructor(private translateService: TranslateService) {
    this.deliveryOptions = new BehaviorSubject<DeliveryOption[]>([
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
    ]);
  }

  getDeliveryOptionsObservable(): Observable<DeliveryOption[]> {
    return this.deliveryOptions.asObservable();
  }

  addDeliveryOptionsObservable(deliveryOption: DeliveryOption): void {
    const deliveryOptionTmp = this.deliveryOptions.getValue();
    deliveryOptionTmp.push(deliveryOption);
    this.deliveryOptions.next(deliveryOptionTmp);
  }
}
