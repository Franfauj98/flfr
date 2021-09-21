import {Component} from '@angular/core';
import {pictureTitlePath} from "../../models/PictureTitlePath";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  toggle: boolean = false;
  imagesToShow: pictureTitlePath[] = [];

  constructor() {
  }

  openMorePictures(event: pictureTitlePath[]) {
    this.imagesToShow = event;
    this.toggle = event.length > 0;
  }
}
