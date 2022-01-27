import {Component} from '@angular/core';
import {pictureTitlePath} from '@flfr-app/home-page/models/PictureTitlePath';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent {
  toggle = false;
  imagesToShow: pictureTitlePath[] = [];

  constructor() {
  }

  openMorePictures(event: pictureTitlePath[]): void {
    this.imagesToShow = event;
    this.toggle = event.length > 0;
  }
}
