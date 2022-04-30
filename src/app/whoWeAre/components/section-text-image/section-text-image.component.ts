import {Component, OnInit} from '@angular/core';
import {BrowserUtils} from '@flfr-app/utils/BrowserUtils';

@Component({
  selector: 'app-section-text-image',
  templateUrl: './section-text-image.component.html',
  styleUrls: ['./section-text-image.component.scss']
})
export class SectionTextImageComponent implements OnInit {
  userAgentMobile = false;

  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }

  ngOnInit(): void {
  }

}
