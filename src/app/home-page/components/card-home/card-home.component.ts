import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, EventEmitter, Output} from '@angular/core';
import {nestedPictureTitlePath, pictureTitlePath} from '@flfr-app/home-page/models/PictureTitlePath';

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
  @Output() openNestedPictures: EventEmitter<pictureTitlePath[]> = new EventEmitter();

  constructor() {
    this.imagesToShow = [
      new nestedPictureTitlePath(
        new pictureTitlePath('../../../assets/images/avocat.jpg', 'WEBSITE_CARD_PLANTE_POT'),
        [
          new pictureTitlePath('../../../assets/images/touffe.jpg', 'WEBSITE_CARD_PLANTE_POT'),
          new pictureTitlePath('../../../assets/images/touffe2.jpg', 'WEBSITE_CARD_PLANTE_POT'),
          new pictureTitlePath('../../../assets/images/touffetouffe.jpg', 'WEBSITE_CARD_PLANTE_POT'),
          new pictureTitlePath('../../../assets/images/touffetouffe2.jpg', 'WEBSITE_CARD_PLANTE_POT')
        ]),
      new nestedPictureTitlePath(
        new pictureTitlePath('../../../assets/images/citron.jpg', 'WEBSITE_CARD_PLANTE_BOUTURE'),
        [
          new pictureTitlePath('../../../assets/images/citron.jpg', 'WEBSITE_CARD_PLANTE_BOUTURE'),
          new pictureTitlePath('../../../assets/images/citron.jpg', 'WEBSITE_CARD_PLANTE_BOUTURE'),
          new pictureTitlePath('../../../assets/images/citron.jpg', 'WEBSITE_CARD_PLANTE_BOUTURE'),
          new pictureTitlePath('../../../assets/images/citron.jpg', 'WEBSITE_CARD_PLANTE_BOUTURE')
        ]),
      new nestedPictureTitlePath(
        new pictureTitlePath('../../../assets/images/vigne.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
        [
          new pictureTitlePath('../../../assets/images/vigne.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
          new pictureTitlePath('../../../assets/images/vigne.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
          new pictureTitlePath('../../../assets/images/vigne.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
          new pictureTitlePath('../../../assets/images/vigne.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR')
        ]),
      new nestedPictureTitlePath(
        new pictureTitlePath('../../../assets/images/touffe.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
        [
          new pictureTitlePath('../../../assets/images/vigne.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
          new pictureTitlePath('../../../assets/images/vigne.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
          new pictureTitlePath('../../../assets/images/vigne.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
          new pictureTitlePath('../../../assets/images/vigne.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR')
        ]),
      new nestedPictureTitlePath(
        new pictureTitlePath('../../../assets/images/touffetouffe2.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
        [
          new pictureTitlePath('../../../assets/images/vigne.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
          new pictureTitlePath('../../../assets/images/vigne.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
          new pictureTitlePath('../../../assets/images/vigne.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR'),
          new pictureTitlePath('../../../assets/images/vigne.jpg', 'WEBSITE_CARD_PLANTE_EXTERIEUR')
        ])
    ];
  }

  openMorePictures(i: number): void {
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
