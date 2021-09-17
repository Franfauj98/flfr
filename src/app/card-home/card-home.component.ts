import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss']
})
export class CardHomeComponent {
  imagesToShow: Array<{path: string, text: string}> = [];
  constructor() {
    this.imagesToShow = [{
      path: '../../assets/images/avocat.jpg',
      text: 'WEBSITE_CARD_PLANTE_POT'
    },{
      path: '../../assets/images/citron.jpg',
      text: 'WEBSITE_CARD_PLANTE_BOUTURE'
    },{
      path: '../../assets/images/vigne.jpg',
      text: 'WEBSITE_CARD_PLANTE_EXTERIEUR'
    }];
  }

}
