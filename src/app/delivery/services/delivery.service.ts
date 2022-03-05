import {Injectable} from '@angular/core';
import {DeliveryOption} from '@flfr-app/delivery/models/deliveryOption';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DeliveryService {

  public deliveryOptions: BehaviorSubject<DeliveryOption[]>;
  public deliveryOptionSelected: BehaviorSubject<DeliveryOption> = new BehaviorSubject<DeliveryOption>(new DeliveryOption('', 0));

  constructor(private translateService: TranslateService) {
    this.deliveryOptions = new BehaviorSubject<DeliveryOption[]>([
      new DeliveryOption(this.translateService.instant('WEBSITE_DELIVERY_OPTION_1_NAME'),
        this.translateService.instant('WEBSITE_DELIVERY_OPTION_1_VALUE') as number),
      new DeliveryOption(this.translateService.instant('WEBSITE_DELIVERY_OPTION_2_NAME'),
        this.translateService.instant('WEBSITE_DELIVERY_OPTION_2_VALUE') as number),
      new DeliveryOption(this.translateService.instant('WEBSITE_DELIVERY_OPTION_3_NAME'),
        this.translateService.instant('WEBSITE_DELIVERY_OPTION_3_VALUE') as number),
      new DeliveryOption(this.translateService.instant('WEBSITE_DELIVERY_OPTION_4_NAME'),
        this.translateService.instant('WEBSITE_DELIVERY_OPTION_4_VALUE') as number)
    ]);
  }

  getDeliveryOptionsObservable(): Observable<DeliveryOption[]> {
    return this.deliveryOptions.asObservable();
  }

  getDeliveryOptionSelectedObservable(): Observable<DeliveryOption> {
    return this.deliveryOptionSelected.asObservable();
  }

  addDeliveryOptionsObservable(deliveryOption: DeliveryOption): void {
    const deliveryOptionTmp = this.deliveryOptions.getValue();
    if (deliveryOptionTmp.findIndex(elt => elt.libelle === deliveryOption.libelle) === -1) {
      deliveryOptionTmp.push(deliveryOption);
      this.deliveryOptions.next(deliveryOptionTmp);
    }
  }

  updateDeliveryOptionSelectedObservable(deliveryOption: DeliveryOption): void {
    this.deliveryOptionSelected.next(deliveryOption);
  }
}
