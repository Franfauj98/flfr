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
        new CarouselInfos('../../../../assets/images/testImg.jpg', 'Les fleurs des champs', 'C\'est jolie et ça sent bon.'),
        new CarouselInfos('../../../../assets/images/testImg.jpg', 'Les fleurs des champs', 'Ca favorise le renouvellement de merveilleux écosystèmes.'),
        new CarouselInfos('../../../../assets/images/testImg.jpg', 'Les fleurs des champs', 'Ca se mange mais c\'est pas très bon.')
      ];
    } else {
      this.carouselInfos = [
        new CarouselInfos('../../../../assets/images/uriel-WS4JcpoZz6E-unsplash.jpg', 'Les fleurs des champs', 'C\'est jolie et ça sent bon.'),
        new CarouselInfos('../../../../assets/images/uriel-WS4JcpoZz6E-unsplash.jpg', 'Les fleurs des champs', 'Ca favorise le renouvellement de merveilleux écosystèmes.'),
        new CarouselInfos('../../../../assets/images/uriel-WS4JcpoZz6E-unsplash.jpg', 'Les fleurs des champs', 'Ca se mange mais c\'est pas très bon.')
      ];
    }
  }
}
