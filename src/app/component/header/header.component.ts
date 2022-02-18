import {Component, Input} from '@angular/core';
import {MenuOption} from '@flfr-app/models/MenuOption';
import {DomService} from '@flfr-app/services/dom.service';
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
  menuMobileOpen = false;
  options = [new MenuOption('WEBSITE_TITLE_OPTION_1', 'home', true),
    new MenuOption('WEBSITE_TITLE_OPTION_2', 'whatWeDo', false),
    new MenuOption('WEBSITE_TITLE_OPTION_3', 'whoWeAre', false),
    new MenuOption('WEBSITE_TITLE_OPTION_4', 'contacts', false)];

  constructor(private domService: DomService) {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
    const optionSelected = this.options.find(o => document.URL.endsWith(o.moduleRoute));
    if (optionSelected) {
      this.changePage(optionSelected);
    }
  }

  public changePage(option: MenuOption): void {
    this.options.forEach(opt => {
      opt.selected = opt.libelle === option.libelle;
    });
  }

  public openMenuMobile(): void {
    this.menuMobileOpen = !this.menuMobileOpen;
  }

  public scroll(): void {
    this.domService.scrollToElement('map-city');
  }
}
