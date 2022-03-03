// amCharts imports
import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DeliveryOption} from '@flfr-app/delivery/models/deliveryOption';
import {DeliveryService} from '@flfr-app/delivery/services/delivery.service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss']
})
export class DeliveryFormComponent {

  locationForm: FormGroup;

  constructor(private deliveryService: DeliveryService) {
    this.locationForm = new FormGroup({
      location: new FormControl('', Validators.required)
    });
  }

  submit(): void {
    this.deliveryService.addDeliveryOptionsObservable(new DeliveryOption(this.locationForm.controls.location.value, 16));
  }
}
