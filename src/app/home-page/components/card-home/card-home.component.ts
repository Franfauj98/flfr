import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, EventEmitter, Output} from '@angular/core';
import {nestedPictureTitlePath, pictureTitlePath} from '@flfr-app/home-page/models/PictureTitlePath';
import {BrowserUtils} from '@flfr-app/utils/BrowserUtils';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'rotate(0deg)'
      })),
      state('closed', style({
        transform: 'rotate(540deg)'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class CardHomeComponent {
  imagesToShow: nestedPictureTitlePath[] = [];
  isOpen = [false, false, false];
  userAgentMobile = false;
  @Output() openNestedPictures: EventEmitter<pictureTitlePath[]> = new EventEmitter();

  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
    this.imagesToShow = [
      new nestedPictureTitlePath(
        new pictureTitlePath('../../../assets/images/fleursCoupees1.webp', 'WEBSITE_CARD_PLANTE_POT'),
        [
          new pictureTitlePath('../../../assets/images/fleursCoupees2.webp', 'WEBSITE_CARD_PLANTE_POT'),
          new pictureTitlePath('../../../assets/images/composition1.webp', 'WEBSITE_CARD_PLANTE_POT'),
          new pictureTitlePath('../../../assets/images/composition2.webp', 'WEBSITE_CARD_PLANTE_POT'),
          new pictureTitlePath('../../../assets/images/composition3.webp', 'WEBSITE_CARD_PLANTE_POT')
        ]),
      new nestedPictureTitlePath(
        new pictureTitlePath('../../../assets/images/PlanteInterieur1.webp', 'WEBSITE_CARD_PLANTE_INTERIEUR'),
        [
          new pictureTitlePath('../../../assets/images/PlanteInterieur2.webp', 'WEBSITE_CARD_PLANTE_INTERIEUR'),
          new pictureTitlePath('../../../assets/images/PlanteInterieur3.webp', 'WEBSITE_CARD_PLANTE_INTERIEUR'),
          new pictureTitlePath('../../../assets/images/PlanteInterieur4.webp', 'WEBSITE_CARD_PLANTE_INTERIEUR'),
          new pictureTitlePath('../../../assets/images/PlanteInterieur5.webp', 'WEBSITE_CARD_PLANTE_INTERIEUR')
        ]),
      new nestedPictureTitlePath(
        new pictureTitlePath('../../../assets/images/PlanteExte1.webp', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
        [
          new pictureTitlePath('../../../assets/images/PlanteExte2.webp', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
          new pictureTitlePath('../../../assets/images/PlanteExte3.webp', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
          new pictureTitlePath('../../../assets/images/PlanteExte4.webp', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
          new pictureTitlePath('../../../assets/images/PlanteExte5.webp', 'WEBSITE_CARD_PLANTE_EXTERIEUR')
        ]),
      new nestedPictureTitlePath(
        new pictureTitlePath('../../../assets/images/Replant1.webp', 'WEBSITE_CARD_PLANTE_REPLANTS'),
        [
          new pictureTitlePath('../../../assets/images/Replant2.webp', 'WEBSITE_CARD_PLANTE_REPLANTS'),
          new pictureTitlePath('../../../assets/images/Replant3.webp', 'WEBSITE_CARD_PLANTE_REPLANTS'),
          new pictureTitlePath('../../../assets/images/Replant4.webp', 'WEBSITE_CARD_PLANTE_REPLANTS'),
          new pictureTitlePath('../../../assets/images/Replant5.webp', 'WEBSITE_CARD_PLANTE_REPLANTS')
        ])
    ];
  }

  openMorePictures(i: number): void {
    if (!this.userAgentMobile) {
      this.isOpen[i] = !this.isOpen[i];
      if (this.isOpen[i]) {
        this.isOpen.forEach((value, index) => {
          if (index !== i) {
            this.isOpen[index] = false;
          }
        });
        this.openNestedPictures.emit(this.imagesToShow[i].nested);
      } else {
        this.openNestedPictures.emit([]);
      }
    }
  }

}
