import {Component} from '@angular/core';
import {CarouselInfos} from '@flfr-app/home-page/models/CarouselInfos';
import {BrowserUtils} from '@flfr-app/utils/BrowserUtils';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  carouselInfos: CarouselInfos[] = [];
  userAgentMobile = false;

  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();

    if (!this.userAgentMobile) {
      this.carouselInfos = [
        new CarouselInfos('../../../../assets/images/carousel1.webp', '', ''),
        new CarouselInfos('../../../../assets/images/carousel2.webp', '', ''),
        new CarouselInfos('../../../../assets/images/carousel3.webp', '', ''),
        new CarouselInfos('../../../../assets/images/carousel4.webp', '', ''),
        new CarouselInfos('../../../../assets/images/carousel5.webp', '', ''),
        new CarouselInfos('../../../../assets/images/carousel6.webp', '', ''),
        new CarouselInfos('../../../../assets/images/carousel7.webp', '', ''),
        new CarouselInfos('../../../../assets/images/carousel8.webp', '', ''),
        new CarouselInfos('../../../../assets/images/carousel9.webp', '', ''),
      ];
    } else {
      this.carouselInfos = [
        new CarouselInfos('../../../../assets/images/uriel-WS4JcpoZz6E-unsplash.webp', 'Les fleurs des champs', 'C\'est jolie et ça sent bon.'),
        new CarouselInfos('../../../../assets/images/uriel-WS4JcpoZz6E-unsplash.webp', 'Les fleurs des champs', 'Ca favorise le renouvellement de merveilleux écosystèmes.'),
        new CarouselInfos('../../../../assets/images/uriel-WS4JcpoZz6E-unsplash.webp', 'Les fleurs des champs', 'Ca se mange mais c\'est pas très bon.')
      ];
    }
  }
}
