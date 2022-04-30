import {Component, OnInit} from '@angular/core';
import {BrowserUtils} from '@flfr-app/utils/BrowserUtils';

@Component({
  selector: 'app-contact-pannel',
  templateUrl: './contact-pannel.component.html',
  styleUrls: ['./contact-pannel.component.scss']
})
export class ContactPannelComponent implements OnInit {
  userAgentMobile = false;

  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }

  ngOnInit(): void {
  }

  openLink = (path: string) => {
    window.open(path);
  }
}
