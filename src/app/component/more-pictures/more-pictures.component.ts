import {Component, Input} from '@angular/core';
import {pictureTitlePath} from "../../models/PictureTitlePath";

@Component({
  selector: 'app-more-pictures',
  templateUrl: './more-pictures.component.html',
  styleUrls: ['./more-pictures.component.scss']
})
export class MorePicturesComponent {
  @Input() imagesToShow: pictureTitlePath[] = [];

  constructor() {}
}
