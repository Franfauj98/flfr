import {Component} from '@angular/core';
import {QuickInfo} from '@flfr-app/home-page/models/QuickInfo';
import {BrowserUtils} from '@flfr-app/utils/BrowserUtils';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-quick-info',
  templateUrl: './quick-info.component.html',
  styleUrls: ['./quick-info.component.scss']
})
export class QuickInfoComponent {
  quickInfoList: QuickInfo[] = [];
  userAgentMobile = false;

  constructor(private translateService: TranslateService) {
    this.quickInfoList = [
      new QuickInfo(this.translateService.instant('WEBSITE_QUICK_INFO_SAINT_VALENTIN_ICON'),
        this.translateService.instant('WEBSITE_QUICK_INFO_SAINT_VALENTIN_TITLE'),
        this.translateService.instant('WEBSITE_QUICK_INFO_SAINT_VALENTIN_INFO')),
      new QuickInfo(this.translateService.instant('WEBSITE_QUICK_INFO_FETE_MERE_ICON'),
        this.translateService.instant('WEBSITE_QUICK_INFO_FETE_MERE_TITLE'),
        this.translateService.instant('WEBSITE_QUICK_INFO_FETE_MERE_INFO')),
      new QuickInfo(this.translateService.instant('WEBSITE_QUICK_INFO_TOUSSAINT_ICON'),
        this.translateService.instant('WEBSITE_QUICK_INFO_TOUSSAINT_TITLE'),
        this.translateService.instant('WEBSITE_QUICK_INFO_TOUSSAINT_INFO'))
    ];
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }
}
