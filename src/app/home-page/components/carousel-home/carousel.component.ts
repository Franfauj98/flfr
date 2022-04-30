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
  }
}
