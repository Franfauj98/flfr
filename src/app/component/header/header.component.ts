import {Component, Input} from '@angular/core';
import {MenuOption} from '@flfr-app/models/MenuOption';
import {BrowserUtils} from '@flfr-app/utils/BrowserUtils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  scrollingMode = false;
  userAgentMobile = false;
  options = [new MenuOption('WEBSITE_TITLE_OPTION_1', true), new MenuOption('WEBSITE_TITLE_OPTION_2', false),
    new MenuOption('WEBSITE_TITLE_OPTION_3', false), new MenuOption('WEBSITE_TITLE_OPTION_4', false)];

  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }

  public changePage(option: MenuOption): void {
    this.options.forEach(opt => {
      opt.selected = opt.libelle === option.libelle;
    });
  }
}
