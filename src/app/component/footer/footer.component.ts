import {Component, OnInit} from '@angular/core';
import {BrowserUtils} from '@flfr-app/utils/BrowserUtils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  userAgentMobile = false;

  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }

  ngOnInit(): void {
  }

}
