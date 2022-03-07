import {Component, Input} from '@angular/core';
import {BrowserUtils} from '@flfr-app/utils/BrowserUtils';

@Component({
  selector: 'app-quick-info-element',
  templateUrl: './quick-info-element.component.html',
  styleUrls: ['./quick-info-element.component.scss']
})
export class QuickInfoElementComponent {
  userAgentMobile = false;

  @Input() icon = '';
  @Input() title = '';
  @Input() info = '';

  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }
}
