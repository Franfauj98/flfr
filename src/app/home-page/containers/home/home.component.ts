import {Component} from '@angular/core';
import {pictureTitlePath} from '@flfr-app/home-page/models/PictureTitlePath';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  toggle = false;
  imagesToShow: pictureTitlePath[] = [];

  constructor() {
  }

  openMorePictures(event: pictureTitlePath[]): void {
    this.imagesToShow = event;
    this.toggle = event.length > 0;
  }
}
