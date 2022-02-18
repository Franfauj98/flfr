import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-quick-info-element',
  templateUrl: './quick-info-element.component.html',
  styleUrls: ['./quick-info-element.component.scss']
})
export class QuickInfoElementComponent {

  @Input() icon = '';
  @Input() title = '';
  @Input() info = '';

  constructor() {
  }
}
