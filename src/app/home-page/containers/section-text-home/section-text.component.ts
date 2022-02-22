import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section-text',
  templateUrl: './section-text.component.html',
  styleUrls: ['./section-text.component.scss']
})
export class SectionTextComponent {

  @Input() icon = '';
  @Input() title = '';
  @Input() text = '';

  constructor() {}
}
