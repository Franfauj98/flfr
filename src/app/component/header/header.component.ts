import {Component, Input} from '@angular/core';
import {MenuOption} from '@flfr-app/models/MenuOption';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  scrollingMode = false;

  options = [new MenuOption('WEBSITE_TITLE_OPTION_1', true), new MenuOption('WEBSITE_TITLE_OPTION_2', false),
    new MenuOption('WEBSITE_TITLE_OPTION_3', false), new MenuOption('WEBSITE_TITLE_OPTION_4', false)];

  public changePage(option: MenuOption): void {
    this.options.forEach(opt => {
      opt.selected = opt.libelle === option.libelle;
    });
  }
}
