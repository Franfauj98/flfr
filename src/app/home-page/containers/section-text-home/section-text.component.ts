import {Component, Input} from '@angular/core';
import {BrowserUtils} from '@flfr-app/utils/BrowserUtils';

@Component({
  selector: 'app-section-text',
  templateUrl: './section-text.component.html',
  styleUrls: ['./section-text.component.scss']
})
export class SectionTextComponent {

  @Input() icon = '';
  @Input() title = '';
  @Input() text = '';
  userAgentMobile = false;

  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }
}
